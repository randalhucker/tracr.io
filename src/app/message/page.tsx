/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import Main from '../../components/main';
import Button from '../../components/button';
import styles from './message.module.scss';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';
import { useState } from 'react';

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
      <div className={styles.messageInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.welcomeBackUserParent}>
                <h1 className={styles.welcomeBackUserContainer}>
                  <p className={styles.welcomeBack}>welcome back,</p>
                  <p className={styles.user}>
                    <b>User</b>
                  </p>
                </h1>
                <div className={styles.buttonParent}>
                  <Button
                    text="create new claim"
                    icon="/page1.svg"
                    onClick={handleCreateNewClaim}
                  />
                  <Button
                    text="report lost item"
                    icon="/magnifyingglasssvgrepocom-2-1.svg"
                    onClick={handleReportLostItem}
                  />
                </div>
              </div>
              <div className={styles.claimListContainerWrapper}>
                <div className={styles.claimListContainer}>
                  <div className={styles.frameContainer}>
                    <div className={styles.currentClaimsWrapper}>
                      <h1 className={styles.currentClaims}>current claims</h1>
                    </div>
                    <div className={styles.claimsDivider} />
                  </div>
                  <div className={styles.claimDetailsContainerParent}>
                    <div className={styles.claimDetailsContainer}>
                      <h1 className={styles.airpods}>
                        <p className={styles.airpods1}>AirPods</p>
                      </h1>
                      <h3 className={styles.smithHall}>Smith Hall | Apr. 27</h3>
                      <div className={styles.fbf474d5f22}>4fbf474d5f22</div>
                    </div>
                    <div className={styles.claimDivider}>
                      <div className={styles.itemDivider} />
                    </div>
                    <h1 className={styles.bearcatCard}>Bearcat Card</h1>
                    <div className={styles.itemDetails}>
                      <h3 className={styles.baldwinHall}>Baldwin Hall | May 2</h3>
                      <div className={styles.cfb807629ad6}>cfb807629ad6</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.adminContainer}>
                <div className={styles.adminHeader}>
                  <div className={styles.adminTitle}>
                    <h2 className={styles.admin}>admin</h2>
                  </div>
                  <div className={styles.adminDivider} />
                </div>
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
          <div className={styles.footer}>
            <div className={styles.footerContainer}>
              <div className={styles.footerContainerChild} />
              <b className={styles.coreDumpersLimited}>© Core Dumpers Limited 2024</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
