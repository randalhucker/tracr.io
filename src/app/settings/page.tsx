/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import Main from '../../components/main';
import styles from './settings.module.scss';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { DecodedToken } from '@/hooks/useRoleAuth';
import { buildOneEntityUrl, EntityType, HttpMethod } from '@/helpers/api';
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

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Submitting form...');
    try {
      if (isClient) {
        const token = window.localStorage.getItem('token');
        if (token) {
          const decoded = jwtDecode<DecodedToken>(token);
          const response = await fetch(
            buildOneEntityUrl(HttpMethod.PUT, EntityType.USER, decoded.id),
            {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                firstName: firstName_input,
                lastName: lastName_input,
                email: email,
                password: newPassword_input,
                role: 'USER'
              })
            }
          );

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          setMessage('Your settings have been successfully updated!');
          setShowMessageBox(true);
        }
      }
    } catch (error) {
      console.error('Error updating account:', error);
    }
  };

  const handleDeleteAccount = async () => {
    console.log('Deleting account...');
    try {
      if (isClient) {
        const token = window.localStorage.getItem('token');
        if (token) {
          const decoded = jwtDecode<DecodedToken>(token);
          const response = await fetch(
            buildOneEntityUrl(HttpMethod.DELETE, EntityType.USER, decoded.id),
            {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              }
            }
          );

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          setMessage('Your account has been permanently deleted.');
          setShowMessageBox(true);
        }
      }
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  const handleLogOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Logging out...');
    window.localStorage.removeItem('token');
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
    const fetchData = async () => {
      try {
        if (isClient) {
          const token = window.localStorage.getItem('token');
          if (token) {
            const decoded = jwtDecode<DecodedToken>(token);
            const response = await fetch(
              buildOneEntityUrl(HttpMethod.GET, EntityType.USER, decoded.id),
              {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                }
              }
            );

            if (!response.ok) {
              throw new Error('Network response was not ok');
            }

            const userData = await response.json();
            // Assuming userData contains fields for firstName, lastName, and email
            setFirstName(userData.firstName);
            setLastName(userData.lastName);
            setEmail(userData.email);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
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
