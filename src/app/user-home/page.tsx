/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import Main from '../../components/main';
import Button from '../../components/button';
import styles from './user-home.module.scss';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';
import UserHomeComponent from '@/components/user-home-component';

const UserHome: NextPage = () => {
  const router = useRouter();
  const isClient = useClientSide();

  return (
    <div className={styles.userHome}>
      <div className={styles.wrapperGroup9}>
        <img className={styles.wrapperGroup9Child} alt="" src="/background.svg" />
      </div>
      <Main back="/back.svg" settings="/settings.svg" messages="/messages.svg" />
      <UserHomeComponent />
    </div>
  );
};

export default UserHome;
