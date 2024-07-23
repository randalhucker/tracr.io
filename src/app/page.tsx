/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import GroupComponent from '../components/group-component';
import styles from './login.module.scss';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';
import { DecodedToken } from '@/hooks/useRoleAuth';
import { LOGIN_URL } from '@/helpers/api';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';

const Login: NextPage = () => {
  const router = useRouter();
  const isClient = useClientSide();

  const [email_input, setEmailInput] = useState('');
  const [password_input, setPasswordInput] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Set form value to given email
    setEmailInput(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Set form value to given password
    setPasswordInput(e.target.value);
  };

  const tempLogin = () => {
    // Temporarily log in to the user home page
    router.push('/user-home');
  }

  const attemptLogin = async () => {
    try {
      // Send login request to API (common Login URL now)
      const response = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email_input,
          password: password_input
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle successful API call, push to correct home page (same as useEffect code above)
      if (isClient) {
        const token = window.localStorage.getItem('token');
        if (token) {
          try {
            // TODO: add basic token stuff so we can easily get the role of the user/admin
            const decoded = jwtDecode<DecodedToken>(token);
            if (decoded.role === 'user') {
              router.push('/user-home');
            } else if (decoded.role === 'admin') {
              router.push('/admin-home');
            } else {
              throw new Error('Invalid role');
            }
          } catch (error) {
            window.localStorage.removeItem('token');
            router.push('/');
          }
        }
      }

      console.log('API call successful');
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.coreDumpersLimited}>© Core Dumpers Limited 2024</b>
      </div>
      <div className={styles.frameParent}>
        <img className={styles.frameItem} alt="" src="/group-22.svg" />
        <div className={styles.rectangleGroup}>
          <div className={styles.frameInner} />
          <GroupComponent />
        </div>
      </div>
      <div className={styles.input}>
        <label className={styles.label}>
          <div className={styles.email}>email</div>
          <input type="email" onChange={handleEmailChange} />
        </label>
      </div>
      <div className={styles.input1}>
        <label className={styles.label1}>
          <div className={styles.email1}>password</div>
          <input type="password" onChange={handlePasswordChange} />
        </label>
      </div>
      <button className={styles.button} onClick={tempLogin}>
        <img className={styles.vuesaxlinearcircleIcon} alt="" src="/vuesaxlinearcircle.svg" />
        <div className={styles.button1}>log in</div>
        <img className={styles.vuesaxlinearcircleIcon1} alt="" src="/vuesaxlinearcircle.svg" />
      </button>
    </div>
  );
};

export default Login;
