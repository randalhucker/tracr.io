/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import Main from '../../components/main';
import styles from './settings.module.scss';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';
import { useEffect, useState } from 'react';
import MessageBox from '@/components/message-box';

const Settings: NextPage = () => {
  const router = useRouter();
  const isClient = useClientSide();

  const [showMessageBox, setShowMessageBox] = useState(false);
  const [message, setMessage] = useState('Your report has been successfully submitted!');

  const [oldPassword_input, setOldPassword] = useState('');
  const [newPassword_input, setNewPassword] = useState('');
  const [confirmPassword_input, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName_input, setFirstName] = useState('');
  const [lastName_input, setLastName] = useState('');

  const handleOldPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleSubmit = () => {
    // API call to update user data
    setMessage('Your settings have been successfully updated!');
  };

  const handleDeleteAccount = () => {
    // API call to delete account
    setMessage('Your account has been permanently deleted.');
    setShowMessageBox(true);
  };

  const handleLogOut = () => {
    // API call to log out
    setMessage('You have been successfully logged out!');
    setShowMessageBox(true);
  };

  const handleCloseMessageBox = () => {
    setShowMessageBox(false);
    if (message === 'Your settings have been successfully updated!') {
      return;
    }
    router.push('/');
  };

  useEffect(() => {
    if (isClient) {
      // API call to get user data (to display name and email)

      // set user data
      setFirstName('temp');
      setLastName('temp');
      setEmail('temp');
    }
  }, [isClient]);

  return (
    <div className={styles.settings}>
      <Main back="/back.svg" settings="/settings.svg" messages="/messages.svg" home="/home.svg" />
      <div className={styles.frameParent}>
        <div className={styles.wrapperGroup9Parent}>
          <div className={styles.wrapperGroup9}>
            <img className={styles.wrapperGroup9Child} alt="" src="/background.svg" />
          </div>
          <form className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <b className={styles.deleteAccount} onClick={handleDeleteAccount}>
              delete account
            </b>
            <button className={styles.button} onClick={handleLogOut}>
              <div className={styles.logOut}>log out</div>
            </button>
            <button className={styles.button1} onClick={handleSubmit}>
              <div className={styles.submit}>submit</div>
            </button>
            <b className={styles.resetPassword}>reset password</b>
            <div className={styles.input}>
              <div className={styles.label}>
                <input
                  className={styles.textInput}
                  placeholder="old password"
                  type="password"
                  value={oldPassword_input}
                  onChange={handleOldPasswordChange}
                />
              </div>
            </div>
            <div className={styles.input1}>
              <div className={styles.label1}>
                <input
                  className={styles.textInput}
                  placeholder="new password"
                  type="password"
                  value={newPassword_input}
                  onChange={handleNewPasswordChange}
                />
              </div>
            </div>
            <div className={styles.input2}>
              <div className={styles.label2}>
                <input
                  className={styles.textInput}
                  placeholder="confirm password"
                  type="password"
                  value={confirmPassword_input}
                  onChange={handleConfirmPasswordChange}
                />
              </div>
            </div>
            <b className={styles.name}>name</b>
            <div className={styles.input3}>
              <div className={styles.label3}>
                <input
                  className={styles.textInput}
                  placeholder={firstName_input}
                  type="name"
                  value={firstName_input}
                  onChange={handleFirstNameChange}
                />
              </div>
            </div>
            <div className={styles.input4}>
              <div className={styles.label4}>
                <input
                  className={styles.textInput}
                  placeholder={lastName_input}
                  type="name"
                  value={lastName_input}
                  onChange={handleLastNameChange}
                />
              </div>
            </div>
            <input className={styles.input5} placeholder={email} type="text" />
          </form>
        </div>
      </div>
      {/* Show MessageBox when claim is filed */}
      {showMessageBox && <MessageBox message={message} onClose={handleCloseMessageBox} />}
    </div>
  );
};

export default Settings;
