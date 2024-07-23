/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import Main from '../../components/main';
import styles from './settings.module.scss';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';
import { useState } from 'react';

const Settings: NextPage = () => {
  const router = useRouter();
  const isClient = useClientSide();

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleOldPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleSubmit = () => {
    // API call to update user data
    router.back();
  };

  const handleDeleteAccount = () => {
    // API call to delete account
    router.push('/');
  };

  const handleLogOut = () => {
    router.push('/');
  };

  const handleResetPassword = () => {
    // API call to reset password
    router.push('/');
  };

  const useEffect = () => {
    if (isClient) {
      // API call to get user data

      // set user data
      setFirstName('temp');
      setLastName('temp');
      setEmail('temp');
    }
  };

  return (
    <div className={styles.settings}>
      <Main group7="/group-71.svg" group8="/group-81.svg" button="/button1.svg" />
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <b className={styles.coreDumpersLimited}>© Core Dumpers Limited 2024</b>
        </div>
        <div className={styles.wrapperGroup9Parent}>
          <div className={styles.wrapperGroup9}>
            <img className={styles.wrapperGroup9Child} alt="" src="/group-9.svg" />
          </div>
          <form className={styles.rectangleGroup} onSubmit={handleSubmit}>
            <div className={styles.frameItem} />
            <b className={styles.deleteAccount} onClick={handleDeleteAccount}>
              delete account
            </b>
            <button className={styles.button} type="button" onClick={handleLogOut}>
              <img className={styles.vuesaxlinearcircleIcon} alt="" src="/vuesaxlinearcircle.svg" />
              <b className={styles.logOut}>log out</b>
            </button>
            <button className={styles.button1} type="submit">
              <img
                className={styles.vuesaxlinearcircleIcon1}
                alt=""
                src="/vuesaxlinearcircle.svg"
              />
              <b className={styles.submit}>submit</b>
            </button>
            <b className={styles.resetPassword} onClick={handleResetPassword}>
              reset password
            </b>
            <div className={styles.input}>
              <div className={styles.label}>
                <div className={styles.email}>old password</div>
              </div>
              <input
                type="password"
                placeholder="old password"
                onChange={handleOldPasswordChange}
                className={styles.inputField}
              />
            </div>
            <div className={styles.input1}>
              <div className={styles.label1}>
                <div className={styles.email1}>new password</div>
              </div>
              <input
                type="password"
                placeholder="new password"
                onChange={handleNewPasswordChange}
                className={styles.inputField}
              />
            </div>
            <div className={styles.input2}>
              <input
                type="password"
                placeholder="confirm password"
                onChange={handleConfirmPasswordChange}
                className={styles.inputField}
              />
            </div>
            <b className={styles.name}>name</b>
            <div className={styles.input3}>
              <div className={styles.label2}>
                <input
                  type="text"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  className={styles.inputField}
                />
              </div>
            </div>
            <div className={styles.input4}>
              <div className={styles.label3}>
                <input
                  type="text"
                  value={lastName}
                  onChange={handleLastNameChange}
                  className={styles.inputField}
                />
              </div>
            </div>
            <div className={styles.input5}>
              <input
                type="email"
                placeholder="test@email.com"
                value={email}
                onChange={handleEmailChange}
                className={styles.inputField}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
