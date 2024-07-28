/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import Main from '../../components/main';
import styles from './admin-home.module.scss';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';
import AdminHomeComponent from '@/components/admin-home-component';

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
        <img className={styles.wrapperGroup9Child} alt="" src="/background.svg" />
      </div>
      <Main back="/back.svg" settings="/settings.svg" messages="/messages.svg" home="/home.svg" />
      <div className={styles.welcomeContentWrapper}>
        <AdminHomeComponent />
      </div>
    </div>
  );
};

export default AdminHome;
