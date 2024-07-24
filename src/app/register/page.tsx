/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';
import styles from './register.module.scss';

const Register: NextPage = () => {
  const router = useRouter();
  const isClient = useClientSide();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegisterClick = () => {
    // API call to register user
    router.push('/user-home');
  };

  return (
    <div className={styles.register}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.coreDumpersLimited}>© Core Dumpers Limited 2024</b>
      </div>
      <div className={styles.frameParent}>
        <img className={styles.frameItem} alt="" src="/group-22.svg" />
        <form className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.input}>
            <div className={styles.label}>
              <div className={styles.email}>Name</div>
              <input
                className={styles.inputField}
                placeholder="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.label}>
              <div className={styles.email}>Email</div>
              <input
                className={styles.inputField}
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.input1}>
            <div className={styles.label1}>
              <div className={styles.email1}>Password</div>
              <input
                className={styles.inputField}
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.input1}>
            <div className={styles.label1}>
              <div className={styles.email1}>Confirm Password</div>
              <input
                className={styles.inputField}
                placeholder="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <h1 className={styles.letsMakeAn}>Let’s make an account</h1>
          <button type="button" className={styles.button} onClick={handleRegisterClick}>
            <img className={styles.vuesaxlinearcircleIcon} alt="" src="/vuesaxlinearcircle.svg" />
            <div className={styles.button1}>register</div>
            <img className={styles.vuesaxlinearcircleIcon1} alt="" src="/vuesaxlinearcircle.svg" />
          </button>
          <div className={styles.mustBeAContainer}>
            {`must be a valid email registered to an `}
            <span className={styles.affiliatedInstitution}>affiliated institution</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
