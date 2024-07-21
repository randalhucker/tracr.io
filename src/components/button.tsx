/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  vuesaxlinearcircle: string;
  createNewClaim: string;
  page1: string;
  onClick?: () => void; // Add onClick prop
}

const Button: React.FC<ButtonProps> = ({ vuesaxlinearcircle, createNewClaim, page1, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <img className={styles.vuesaxlinearcircleIcon} alt="" src={vuesaxlinearcircle} />
      <div className={styles.buttonText}>{createNewClaim}</div>
      <img className={styles.page1Icon} alt="" src={page1} />
    </button>
  );
};

export default Button;
