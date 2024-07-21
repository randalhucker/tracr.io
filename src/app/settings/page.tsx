/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Main from '../../components/main';
import styles from './settings.module.scss';

const Settings: NextPage = () => {
  const handleDeleteAccount = () => {
    // Placeholder function for delete account button
    console.log('Delete account clicked');
  };

  const handleLogOut = () => {
    // Placeholder function for log out button
    console.log('Log out clicked');
  };

  const handleSubmit = () => {
    // Placeholder function for submit button
    console.log('Submit clicked');
  };

  const handleResetPassword = () => {
    // Placeholder function for reset password button
    console.log('Reset password clicked');
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
          <form className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <b className={styles.deleteAccount} onClick={handleDeleteAccount}>
              delete account
            </b>
            <button className={styles.button} onClick={handleLogOut}>
              <img className={styles.vuesaxlinearcircleIcon} alt="" src="/vuesaxlinearcircle.svg" />
              <b className={styles.logOut}>log out</b>
            </button>
            <button className={styles.button1} onClick={handleSubmit}>
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
            </div>
            <div className={styles.input1}>
              <div className={styles.label1}>
                <div className={styles.email1}>new password</div>
              </div>
            </div>
            <input className={styles.input2} placeholder="confirm password" type="text" />
            <b className={styles.name}>name</b>
            <div className={styles.input3}>
              <div className={styles.label2}>
                <b className={styles.email2}>Randal</b>
              </div>
            </div>
            <div className={styles.input4}>
              <div className={styles.label3}>
                <b className={styles.email3}>Hucker</b>
              </div>
            </div>
            <input className={styles.input5} placeholder="rhucker@gmail.com" type="text" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
