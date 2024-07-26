/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import Main from '../../components/main';
import Button from '../../components/button';
import styles from './message.module.scss';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';
import { useEffect, useState } from 'react';
import UserHomeComponent from '@/components/user-home-component';
import { jwtDecode } from 'jwt-decode';
import { DecodedToken } from '@/hooks/useRoleAuth';
import { buildOneEntityUrl, buildTwoEntityUrl, EntityType, HttpMethod } from '@/helpers/api';
import { Message } from '@prisma/client';

const MessagePage: NextPage = () => {
  const router = useRouter();
  const isClient = useClientSide();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const handleCreateNewClaim = () => {
    router.push('/create-new-claim');
  };

  const handleReportLostItem = () => {
    router.push('/report-lost-item');
  };

  const handleSendMessage = async () => {
    if (newMessage.trim() !== '') {
      console.log('Sending Message...');
      try {
        if (isClient) {
          const token = window.localStorage.getItem('token');
          if (token) {
            const decoded = jwtDecode<DecodedToken>(token);
            const response = await fetch(buildOneEntityUrl(HttpMethod.POST, EntityType.MESSAGE), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              // TODO: Update receiverUserId to the actual user id
              body: JSON.stringify({
                content: newMessage,
                senderUserId: decoded.id,
                receiverUserId: decoded.id === 1 ? 2 : 1,
                senderAdminId: decoded.id === 2 ? 2 : null,
                receiverAdminId: decoded.id === 1 ? 2 : null
              })
            });

            if (!response.ok) {
              throw new Error('Network response was not ok');
            }

            const createdMessage: Message = await response.json();
            setMessages([...messages, createdMessage]);
            setNewMessage('');
          }
        }
      } catch (error) {
        console.error('Error creating message:', error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isClient) {
          const token = window.localStorage.getItem('token');
          if (token) {
            const decoded = jwtDecode<DecodedToken>(token);
            const response = await fetch(
              buildTwoEntityUrl(HttpMethod.GET, EntityType.USER, decoded.id, EntityType.MESSAGE),
              {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                }
              }
            );

            if (!response.ok) {
              throw new Error('Network response was not ok');
            }

            const fetchedMessages: Message[] = await response.json();
            setMessages(fetchedMessages);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [isClient]);

  return (
    <div className={styles.message}>
      <div className={styles.wrapperGroup9}>
        <img className={styles.wrapperGroup9Child} alt="" src="/background.svg" />
      </div>
      <Main back="/back.svg" settings="/settings.svg" messages="/messages.svg" home="/home.svg" />
      <div className={styles.frameContainer}>
        <UserHomeComponent />
        <div className={styles.rectangleParent}>
          <div className={styles.adminContainer}>
            <div className={styles.adminHeader}>
              <div className={styles.adminTitle}>
                <h2 className={styles.admin}>admin</h2>
              </div>
              <div className={styles.adminDivider} />
            </div>
            <div className={styles.messageContainerParent}>
              <div className={styles.messageContainer}>
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`${styles.messageWrapper} ${message.senderAdminId ? styles.adminMessage : styles.userMessage}`}
                  >
                    <div className={styles.messageText}>{message.content}</div>
                    <div className={styles.messageTimestamp}>
                      {new Date(message.sentAt).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.inputContainer}>
                <textarea
                  className={styles.textBox}
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  rows={4}
                  cols={50}
                />
                <button className={styles.sendButton} onClick={handleSendMessage}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
