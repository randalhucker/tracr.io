/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import LoginComponent from '../components/login-component';
import styles from './login.module.scss';

const Login: NextPage = () => {
  return (
    <div className={styles.login}>
      <div className={styles.frameParent}>
        <img className={styles.frameItem} alt="" src="/group-22.svg" />
        <div className={styles.rectangleGroup}>
          <div className={styles.frameInner} />
          <LoginComponent />
        </div>
      </div>
    </div>
  );
};

export default Login;
