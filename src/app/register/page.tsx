/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import RegisterComponent from '../../components/register-component';
import styles from './register.module.scss';

const Register: NextPage = () => {
  return (
    <div className={styles.register}>
      <div className={styles.frameParent}>
        <img className={styles.frameItem} alt="" src="/background.svg" />
      </div>
      <RegisterComponent />
    </div>
  );
};

export default Register;
