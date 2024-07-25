/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';
import styles from './register-component.module.scss';

export type RegisterComponentType = {
  className?: string;
  onRegisterClick?: () => void;
};

const RegisterComponent: NextPage<RegisterComponentType> = ({
  className = '',
  onRegisterClick
}) => {
  const router = useRouter();
  const isClient = useClientSide();

  const [name_input, setName] = useState('');
  const [email_input, setEmail] = useState('');
  const [password_input, setPassword] = useState('');
  const [confirmPassword_input, setConfirmPassword] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const tempRegister = () => {
    // Temporarily log in to the user home page
    console.log('Registering');
    console.log('Name:', name_input);
    console.log('Email:', email_input);
    console.log('Password:', password_input);
    console.log('Confirm Password:', confirmPassword_input);
    router.push('/user-home');
  };

  const attemptRegister = () => {
    // API call to register user
  };

  return (
    <form className={[styles.rectangleParent, className].join(' ')}>
      <h1 className={styles.tracrio}>tracr.io</h1>
      <div className={styles.frameChild} />
      <div className={styles.input3}>
        <div className={styles.label3}>
          <input
            className={styles.textInput}
            placeholder="Name"
            type="name"
            value={name_input}
            onChange={handleNameChange}
          />
        </div>
      </div>
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
      <div className={styles.mustBeAContainer}>
        {`must be a valid email registered to an `}
        <span className={styles.affiliatedInstitution}>affiliated institution</span>
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
      <div className={styles.input2}>
        <div className={styles.label2}>
          <input
            className={styles.textInput}
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword_input}
            onChange={handleConfirmPasswordChange}
          />
        </div>
      </div>
      <button className={styles.button} type="button" onClick={tempRegister}>
        <img className={styles.vuesaxlinearcircleIcon} alt="" src="/vuesaxlinearcircle.svg" />
        <div className={styles.button1}>register</div>
        <img className={styles.vuesaxlinearcircleIcon1} alt="" src="/vuesaxlinearcircle.svg" />
      </button>
    </form>
  );
};

export default RegisterComponent;
