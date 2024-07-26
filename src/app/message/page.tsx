/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import Main from '../../components/main';
import styles from './message.module.scss';
import UserHomeComponent from '@/components/user-home-component';
import MessageComponent from '@/components/message-component';

const MessagePage: NextPage = () => {
  return (
    <div className={styles.message}>
      <div className={styles.wrapperGroup9}>
        <img className={styles.wrapperGroup9Child} alt="" src="/background.svg" />
      </div>
      <Main back="/back.svg" settings="/settings.svg" messages="/messages.svg" home="/home.svg" />
      <div className={styles.frameContainer}>
        <UserHomeComponent />
        <MessageComponent />
      </div>
    </div>
  );
};

export default MessagePage;
