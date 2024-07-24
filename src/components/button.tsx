/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  text: string;
  icon: string;
  onClick?: () => void; // Add onClick prop
}

const Button: React.FC<ButtonProps> = ({text, icon, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <div className={styles.text}>{text}</div>
      <img className={styles.icon} alt="" src={icon} />
    </button>
  );
};

export default Button;
