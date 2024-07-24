/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import styles from './login-component.module.scss';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';
import { DecodedToken } from '@/hooks/useRoleAuth';
import { LOGIN_URL } from '@/helpers/api';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';

export type GroupComponentType = {
  className?: string;
};


const LoginComponent: NextPage<GroupComponentType> = ({ className = '' }) => {
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
    console.log('Logging in');
    console.log('Email:', email_input);
    console.log('Password', password_input);
    router.push('/user-home');
  }

  const handleMakeOneClick = () => {
    // Redirect to registration page
    router.push('/register');
  };

  // const attemptLogin = async () => {
  //   try {
  //     // Send login request to API (common Login URL now)
  //     const response = await fetch(LOGIN_URL, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         email: email_input,
  //         password: password_input
  //       })
  //     });

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     // Handle successful API call, push to correct home page (same as useEffect code above)
  //     if (isClient) {
  //       const token = window.localStorage.getItem('token');
  //       if (token) {
  //         try {
  //           // TODO: add basic token stuff so we can easily get the role of the user/admin
  //           const decoded = jwtDecode<DecodedToken>(token);
  //           if (decoded.role === 'user') {
  //             router.push('/user-home');
  //           } else if (decoded.role === 'admin') {
  //             router.push('/admin-home');
  //           } else {
  //             throw new Error('Invalid role');
  //           }
  //         } catch (error) {
  //           window.localStorage.removeItem('token');
  //           router.push('/');
  //         }
  //       }
  //     }

  //     console.log('API call successful');
  //   } catch (error) {
  //     console.error('There has been a problem with your fetch operation:', error);
  //   }
  // };

  return (
    <form className={[styles.tracrioParent, className].join(' ')}>
      <h1 className={styles.tracrio1}>tracr.io</h1>
      <h1 className={styles.findYourStuff1}>find your stuff</h1>
      <b className={styles.forgotYourPassword}>forgot your password?</b>
      <b className={styles.dontHaveAnContainer}>
        don’t have an account?
        <span className={styles.makeOne} onClick={handleMakeOneClick}> make one</span>
      </b>
      <div className={styles.frameChild} />
      <div className={styles.input}>
        <div className={styles.label}>
          <input
            className={styles.textInput}
            placeholder="Email"
            type="email"
            value={email_input}
            onChange={handleEmailChange}
          />
        </div>
      </div>
      <div className={styles.input1}>
        <div className={styles.label1}>
          <input
            className={styles.textInput}
            placeholder="Password"
            type="password"
            value={password_input}
            onChange={handlePasswordChange}
          />
        </div>
      </div>
      <b className={styles.forgotYourPassword1}>forgot your password?</b>
      <button className={styles.button} type="button" onClick={tempLogin}>
        <div className={styles.button1}>log in</div>
      </button>
      <b className={styles.dontHaveAnContainer1}>
        don’t have an account?
        <span className={styles.makeOne1} onClick={handleMakeOneClick}> make one</span>
      </b>
    </form>
  );
};

export default LoginComponent;
