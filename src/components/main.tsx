/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import styles from './main.module.scss';
import { DecodedToken } from '@/hooks/useRoleAuth';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';

export type MainType = {
  className?: string;
  back?: string;
  settings?: string;
  messages?: string;
  home?: string;
};

const Main: NextPage<MainType> = ({ className = '', back, settings, messages, home }) => {
  const router = useRouter(); // Initialize useRouter
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        setUserRole(decoded.role);
      } catch (error) {
        console.error('Failed to decode token:', error);
        setUserRole(null);
      }
    } else {
      setUserRole(null);
    }
  }, []);

  const handleTracrClick = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode<DecodedToken>(token);
      if (decoded.role === 'ADMIN') {
        router.push('/admin-home');
      } else if (decoded.role === 'USER') {
        router.push('/user-home');
      } else {
        router.push('/');
      }
    } else {
      router.push('/');
    }
  };

  const handleRefreshClick = () => {
    router.refresh();
  };

  const handleSettingsClick = () => {
    router.push('/settings');
  };

  const handleMessagesClick = () => {
    router.push('/message');
  };

  const handleHomeClick = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode<DecodedToken>(token);
      if (decoded.role === 'ADMIN') {
        router.push('/admin-home');
      } else if (decoded.role === 'USER') {
        router.push('/user-home');
      } else {
        router.push('/');
      }
    } else {
      router.push('/');
    }
  };

  return (
    <header className={[styles.main, className].join(' ')}>
      <div className={styles.mainChild} />
      <a className={styles.tracrio} onClick={handleTracrClick}>
        {userRole === 'admin' ? 'tracr.io | admin' : 'tracr.io'}
      </a>
      <div className={styles.mainInner}>
        <div className={styles.frameParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src={back}
            onClick={handleRefreshClick}
          />
          <img
            className={styles.homeIcon}
            loading="lazy"
            alt="Home"
            src={home}
            onClick={handleHomeClick}
          />
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src={settings}
            onClick={handleSettingsClick}
          />
          <div className={styles.buttonWrapper}>
            <img
              className={styles.buttonIcon}
              loading="lazy"
              alt=""
              src={messages}
              onClick={handleMessagesClick}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Main;
