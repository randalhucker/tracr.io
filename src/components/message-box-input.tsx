/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';
import styles from './message-box.module.scss';
import { buildOneEntityUrl, EntityType, HttpMethod } from '@/helpers/api';

type MessageBoxProps = {
  message: string;
  onClose: () => void;
};

const MessageBoxWithInput: React.FC<MessageBoxProps> = ({ message, onClose }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch(buildOneEntityUrl(HttpMethod.POST, EntityType.BUILDING), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: inputValue })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
      onClose();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.messageBox}>
      <div className={styles.messageContent}>
        <p className={styles.messageText}>{message}</p>
        <input
          type="text"
          className={styles.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter building name here"
        />
        <div className={styles.buttons}>
          <button className={styles.submitButton} onClick={handleSubmit}>
            Submit
          </button>
          <button className={styles.closeButton} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageBoxWithInput;
