/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import styles from './frame-component.module.css';

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = '' }) => {
  return (
    <header className={[styles.rectangleParent, className].join(' ')}>
      <div className={styles.frameChild} />
      <a className={styles.tracrio}>tracr.io</a>
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <img className={styles.frameItem} loading="lazy" alt="" src="/group-7.svg" />
          <img className={styles.frameInner} loading="lazy" alt="" src="/group-8.svg" />
          <div className={styles.buttonWrapper}>
            <img className={styles.buttonIcon} loading="lazy" alt="" src="/button.svg" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;
