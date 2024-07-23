/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import { useRouter } from 'next/navigation'; // Import useRouter hook
import styles from './main.module.scss';
import { DecodedToken } from '@/hooks/useRoleAuth';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';

export type MainType = {
  className?: string;
  group7?: string;
  group8?: string;
  button?: string;
};

const Main: NextPage<MainType> = ({ className = '', group7, group8, button }) => {
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
    // get role from token
    const token = localStorage.getItem('token'); // Get token from local storage
    if (token) {
      const decoded = jwtDecode<DecodedToken>(token); // Decode token
      if (decoded.role === 'admin') {
        router.push('/admin-home');
      } else if (decoded.role === 'user') {
        router.push('/user-home');
      } else {
        router.push('/');
      }
    } else {
      router.push('/');
    }
  };

  const handleRefreshClick = () => {
    router.back();
  };

  const handleSettingsClick = () => {
    router.push('/settings');
  };

  const handleMessagesClick = () => {
    // If user is an admin, don't allow them to access messages?
    router.push('/message');
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
            src={group7}
            onClick={handleRefreshClick}
          />
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src={group8}
            onClick={handleSettingsClick}
          />
          <div className={styles.buttonWrapper}>
            <img
              className={styles.buttonIcon}
              loading="lazy"
              alt=""
              src={button}
              onClick={handleMessagesClick}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Main;
