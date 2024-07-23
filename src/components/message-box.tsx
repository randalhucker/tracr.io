/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import styles from './message-box.module.scss';

type MessageBoxProps = {
  message: string;
  onClose: () => void;
};

const MessageBox: React.FC<MessageBoxProps> = ({ message, onClose }) => {
  return (
    <div className={styles.messageBox}>
      <div className={styles.messageContent}>
        <p className={styles.messageText}>{message}</p>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default MessageBox;
