/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import Main from '../../components/main';
import Button from '../../components/button';
import styles from './message.module.scss';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';
import { useState } from 'react';
import UserHomeComponent from '@/components/user-home-component';

const initialMessages = [
  { type: 'user', text: 'User message 1' },
  { type: 'admin', text: 'Admin message 1' },
  { type: 'user', text: 'User message 2' },
  { type: 'admin', text: 'Admin message 2' }
];

const Message: NextPage = () => {
  const router = useRouter();
  const isClientSide = useClientSide();
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleCreateNewClaim = () => {
    router.push('/create-new-claim');
  };

  const handleReportLostItem = () => {
    router.push('/report-lost-item');
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      // API call to send message
      setMessages([...messages, { type: 'user', text: newMessage }]);
      setNewMessage('');
    }
  };

  // TODO:: add USE EFFECT to fetch messages from API

  return (
    <div className={styles.message}>
      <div className={styles.wrapperGroup9}>
        <img className={styles.wrapperGroup9Child} alt="" src="/background.svg" />
      </div>
      <Main back="/back.svg" settings="/settings.svg" messages="/messages.svg" />
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
                    className={`${styles.messageWrapper} ${message.type === 'admin' ? styles.adminMessage : styles.userMessage}`}
                  >
                    <div className={styles.messageText}>{message.text}</div>
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

export default Message;
