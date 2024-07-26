/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import LoginComponent from '../components/login-component';
import styles from './login.module.scss';

const Login: NextPage = () => {
  return (
    <div className={styles.login}>
      <div className={styles.frameParent}>
        <img className={styles.frameItem} alt="" src="/background.svg" />
      </div>
      <LoginComponent />
    </div>
  );
};

export default Login;
