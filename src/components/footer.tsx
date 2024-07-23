/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import { useMemo, type CSSProperties } from 'react';
import styles from './footer.module.scss';

export type FooterType = {
  className?: string;
  vuesaxlinearcircle?: string;
  saveAndExit?: string;
  propWidth?: CSSProperties['width'];
  propAlignSelf?: CSSProperties['alignSelf'];
  onSaveAndExit?: () => void; // Add this prop
};

const Footer: NextPage<FooterType> = ({
  className = '',
  vuesaxlinearcircle,
  saveAndExit,
  propWidth,
  propAlignSelf,
  onSaveAndExit // Add this prop
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div className={[styles.footer, className].join(' ')} style={footerStyle}>
      <button className={styles.button} onClick={onSaveAndExit}>
        <img className={styles.vuesaxlinearcircleIcon} alt="" src={vuesaxlinearcircle} />
        <b className={styles.saveAndExit}>{saveAndExit}</b>
      </button>
    </div>
  );
};

export default Footer;
