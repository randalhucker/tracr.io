/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import { useRouter } from 'next/navigation'; // Import useRouter hook
import styles from './main.module.css';
import { DecodedToken } from '@/hooks/useRoleAuth';
import { jwtDecode } from 'jwt-decode';

export type MainType = {
  className?: string;
  group7?: string;
  group8?: string;
  button?: string;
};

const Main: NextPage<MainType> = ({ className = '', group7, group8, button }) => {
  const router = useRouter(); // Initialize useRouter

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
        router.push('/login');
      }
    } else {
      router.push('/login');
    }
  };

  return (
    <header className={[styles.main, className].join(' ')}>
      <div className={styles.mainChild} />
      <a className={styles.tracrio} onClick={handleTracrClick}>
        tracr.io
      </a>
      <div className={styles.mainInner}>
        <div className={styles.frameParent}>
          <img className={styles.frameChild} loading="lazy" alt="" src={group7} />
          <img className={styles.frameItem} loading="lazy" alt="" src={group8} />
          <div className={styles.buttonWrapper}>
            <img className={styles.buttonIcon} loading="lazy" alt="" src={button} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Main;
