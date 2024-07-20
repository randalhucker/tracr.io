import type { NextPage } from 'next';
import styles from './group-component.module.css';

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({ className = '' }) => {
  return (
    <form className={[styles.tracrioParent, className].join(' ')}>
      <div className={styles.tracrio}>tracr.io</div>
      <b className={styles.findYourStuff}>find your stuff</b>
      <b className={styles.forgotYourPassword}>forgot your password?</b>
      <b className={styles.dontHaveAnContainer}>
        {`don’t have an account? `}
        <span className={styles.makeOne}>make one</span>
      </b>
      <div className={styles.frameChild} />
      <div className={styles.input}>
        <div className={styles.label}>
          <div className={styles.email}>email</div>
        </div>
      </div>
      <div className={styles.input1}>
        <div className={styles.label1}>
          <div className={styles.email1}>password</div>
        </div>
      </div>
      <h1 className={styles.tracrio1}>tracr.io</h1>
      <h1 className={styles.findYourStuff1}>find your stuff</h1>
      <b className={styles.forgotYourPassword1}>forgot your password?</b>
      <b className={styles.dontHaveAnContainer1}>
        {`don’t have an account? `}
        <span className={styles.makeOne1}>make one</span>
      </b>
      <button className={styles.button}>
        <img className={styles.vuesaxlinearcircleIcon} alt="" src="/vuesaxlinearcircle.svg" />
        <div className={styles.button1}>log in</div>
        <img className={styles.vuesaxlinearcircleIcon1} alt="" src="/vuesaxlinearcircle.svg" />
      </button>
    </form>
  );
};

export default GroupComponent;
