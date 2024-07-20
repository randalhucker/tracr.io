import type { NextPage } from 'next';
import styles from './frame-component1.module.css';

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = '' }) => {
  return (
    <header className={[styles.rectangleParent, className].join(' ')}>
      <div className={styles.frameChild} />
      <div className={styles.tracrioAdmin}>tracr.io | Admin</div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <img className={styles.frameItem} loading="lazy" alt="" src="/group-81.svg" />
          <div className={styles.buttonWrapper}>
            <img className={styles.buttonIcon} loading="lazy" alt="" src="/button1.svg" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent1;
