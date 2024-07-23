/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import GroupComponent1 from '../../components/group-component1';
import styles from './register.module.scss';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';

const Register: NextPage = () => {
  const handleRegisterClick = () => {
    // Placeholder function for handling register button click
    console.log('Register button clicked');
  };

  return (
    <div className={styles.register}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.coreDumpersLimited}>© Core Dumpers Limited 2024</b>
      </div>
      <div className={styles.frameParent}>
        <img className={styles.frameItem} alt="" src="/group-22.svg" />
        <GroupComponent1 onRegisterClick={handleRegisterClick} />
      </div>
    </div>
  );
};

export default Register;
