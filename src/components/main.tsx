import type { NextPage } from 'next';
import styles from './main.module.css';

export type MainType = {
  className?: string;
  group7?: string;
  group8?: string;
  button?: string;
};

const Main: NextPage<MainType> = ({ className = '', group7, group8, button }) => {
  return (
    <header className={[styles.main, className].join(' ')}>
      <div className={styles.mainChild} />
      <a className={styles.tracrio}>tracr.io</a>
      <div className={styles.mainInner}>
        <div className={styles.frameParent}>
          <img className={styles.frameChild} loading="lazy" alt="" src={group7} />
          <img className={styles.frameItem} loading="lazy" alt="" src={group8} />
          <div className={styles.buttonWrapper}>
            <img className={styles.buttonIcon} loading="lazy" alt="" src={button} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Main;
