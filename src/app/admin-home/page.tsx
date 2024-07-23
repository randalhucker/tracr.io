/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import Main from '../../components/main';
import styles from './admin-home.module.scss';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';

const AdminHome: NextPage = () => {
  const handleManageLostItemsClick = () => {
    console.log('Manage Lost Items button clicked');
    // Placeholder function for manage lost items action
  };

  const handleManageDeploymentClick = () => {
    console.log('Manage Deployment button clicked');
    // Placeholder function for manage deployment action
  };

  const handleSystemReportClick = () => {
    console.log('System Report button clicked');
    // Placeholder function for system report action
  };

  return (
    <div className={styles.adminHome}>
      <div className={styles.wrapperGroup9}>
        <img className={styles.wrapperGroup9Child} alt="" src="/group-22.svg" />
      </div>
      <Main group7="/group-71.svg" group8="/group-81.svg" button="/button1.svg" />
      <div className={styles.welcomeContentWrapper}>
        <div className={styles.welcomeContent}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.welcomeBackAdminContainer}>
              <p className={styles.welcomeBack}>welcome back,</p>
              <p className={styles.admin}>
                <b>Admin</b>
              </p>
            </div>
            <div className={styles.managementButtons}>
              <button className={styles.button} onClick={handleManageLostItemsClick}>
                <img
                  className={styles.vuesaxlinearcircleIcon}
                  alt=""
                  src="/vuesaxlinearcircle.svg"
                />
                <b className={styles.manageLostItems}>manage lost items</b>
              </button>
              <div className={styles.deploymentReportsButtons}>
                <button className={styles.button1} onClick={handleManageDeploymentClick}>
                  <img
                    className={styles.vuesaxlinearcircleIcon1}
                    alt=""
                    src="/vuesaxlinearcircle.svg"
                  />
                  <b className={styles.manageDeployment}>manage deployment</b>
                </button>
                <button className={styles.button2} onClick={handleSystemReportClick}>
                  <img
                    className={styles.vuesaxlinearcircleIcon2}
                    alt=""
                    src="/vuesaxlinearcircle.svg"
                  />
                  <b className={styles.systemReport}>system report</b>
                </button>
              </div>
            </div>
          </div>
          <footer className={styles.footer}>
            <div className={styles.copyright}>
              <div className={styles.separator} />
              <b className={styles.coreDumpersLimited}>© Core Dumpers Limited 2024</b>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
