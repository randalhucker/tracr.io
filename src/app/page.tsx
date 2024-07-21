/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import GroupComponent from '../components/group-component';
import styles from './login.module.scss';

// Given the following page and scss file, can you please fix up the code and enter placeholder functions to handle buttons being clicked? There's no need to reprint the scss unless something is changed.

const Login: NextPage = () => {
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Email:', e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Password:', e.target.value);
  };

  const handleLoginClick = () => {
    console.log('Log in button clicked');
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
      <button className={styles.button} onClick={handleLoginClick}>
        <img className={styles.vuesaxlinearcircleIcon} alt="" src="/vuesaxlinearcircle.svg" />
        <div className={styles.button1}>log in</div>
        <img className={styles.vuesaxlinearcircleIcon1} alt="" src="/vuesaxlinearcircle.svg" />
      </button>
    </div>
  );
};

export default Login;
