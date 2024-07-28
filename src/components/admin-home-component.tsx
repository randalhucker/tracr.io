/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import styles from '../app/admin-home/admin-home.module.scss';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useClientSide from '@/hooks/useClientSide';
import { jwtDecode } from 'jwt-decode';
import { DecodedToken } from '@/hooks/useRoleAuth';
import { buildOneEntityUrl, buildTwoEntityUrl, EntityType, HttpMethod } from '@/helpers/api';

export type AdminHomeComponentType = {
  className?: string;
};

const AdminHomeComponent: NextPage<AdminHomeComponentType> = ({ className = '' }) => {
  const router = useRouter();
  const isClient = useClientSide();
  const [firstName, setFirstName] = useState('');

  const handleManageDeploymentClick = () => {
    router.push('/admin-deployment');
  };

  const handleManageLostItemsClick = () => {
    router.push('/admin-lost-items');
  };

  const handleSystemReportClick = () => {
    router.push('/admin-system-config');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isClient) {
          const token = window.localStorage.getItem('token');
          if (token) {
            const decoded = jwtDecode<DecodedToken>(token);
            const response = await fetch(
              buildOneEntityUrl(HttpMethod.GET, EntityType.USER, decoded.id)
            );

            if (!response.ok) {
              throw new Error('Network response was not ok');
            }

            const userData = await response.json();
            setFirstName(userData.firstName);
          } else {
            //router.push('/'); // Commented out for testing
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [isClient, router]);

  return (
    <div className={styles.welcomeContent}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.welcomeBackAdminContainer}>
          <p className={styles.welcomeBack}>welcome back,</p>
          <p className={styles.admin}>
            <b>{firstName}</b>
          </p>
        </div>
        <div className={styles.managementButtons}>
          <button className={styles.button} onClick={handleManageLostItemsClick}>
            <img className={styles.vuesaxlinearcircleIcon} alt="" />
            <b className={styles.manageLostItems}>manage lost items</b>
          </button>
          <div className={styles.deploymentReportsButtons}>
            <button className={styles.button1} onClick={handleManageDeploymentClick}>
              <img className={styles.vuesaxlinearcircleIcon1} alt="" />
              <b className={styles.manageDeployment}>manage deployment</b>
            </button>
            <button className={styles.button2} onClick={handleSystemReportClick}>
              <img className={styles.vuesaxlinearcircleIcon2} alt="" />
              <b className={styles.systemReport}>system report</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomeComponent;
