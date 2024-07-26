/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import styles from '../app/message/message.module.scss';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { DecodedToken } from '@/hooks/useRoleAuth';
import { buildOneEntityUrl, buildTwoEntityUrl, EntityType, HttpMethod } from '@/helpers/api';
import { Message } from '@prisma/client';

export type MessageComponentType = {
  className?: string;
};

const MessageComponent: NextPage<MessageComponentType> = ({ className = '' }) => {
  const isClient = useClientSide();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [name, setName] = useState('admin');

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

            // TODO Maybe change to use actual admin/user name (would be easy since we're only using 2 users)
            const user_name = 'user';
            const admin_name = 'admin';
            if (decoded.role === 'admin') {
              setName(user_name);
            }
            if (decoded.role === 'user') {
              setName(admin_name);
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
    <div className={styles.rectangleParent}>
      <div className={styles.adminContainer}>
        <div className={styles.adminHeader}>
          <div className={styles.adminTitle}>
            <h2 className={styles.admin}>{name}</h2>
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
  );
};

export default MessageComponent;
