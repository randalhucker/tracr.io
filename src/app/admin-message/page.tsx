/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import Main from '../../components/main';
import styles from './admin-message.module.scss';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';
import AdminHomeComponent from '@/components/admin-home-component';
import MessageComponent from '@/components/message-component';

const AdminMessage: NextPage = () => {
  return (
    <div className={styles.adminMessage}>
      <div className={styles.wrapperGroup9}>
        <img className={styles.wrapperGroup9Child} alt="" src="/background.svg" />
      </div>
      <Main back="/back.svg" settings="/settings.svg" messages="/messages.svg" home="/home.svg" />
      <div className={styles.frameContainer}>
        <AdminHomeComponent />
        <MessageComponent />
      </div>
    </div>
  );
};

export default AdminMessage;
