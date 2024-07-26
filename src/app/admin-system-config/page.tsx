/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import Main from '../../components/main';
import Footer from '../../components/footer';
import styles from './admin-system-config.module.scss';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';
import { useEffect, useState } from 'react';
import MessageBox from '@/components/message-box';

const AdminSystemConfig: NextPage = () => {
  const router = useRouter();
  const clientSide = useClientSide();

  const [uptime, setUptime] = useState(''); // make this a time type?
  const [num_users, setNumUsers] = useState(0);
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [message, setMessage] = useState('Report generated (not really)');

  useEffect(() => {
    if (clientSide) {
      // API call to get uptime (if possible) and number of users

      setNumUsers(2);
      setUptime('1 day, 14 hours, 25 minutes'); // don't freak out lol
    }
  }, [clientSide, router]);

  const handleGenerateReport = () => {
    // Placeholder function for generating a report
    console.log('Generate report clicked');
    setShowMessageBox(true);
  };

  const handleCloseMessageBox = () => {
    setShowMessageBox(false);
  };

  return (
    <div className={styles.adminSystemConfig}>
      <div className={styles.wrapperGroup9}>
        <img className={styles.wrapperGroup9Child} alt="" src="/background.svg" />
      </div>
      <Main back="/back.svg" settings="/settings.svg" messages="/messages.svg" home="/home.svg" />
      <div className={styles.statsContainerWrapper}>
        <div className={styles.statsContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.uptime35Days14Hours25Parent}>
              <div className={styles.uptime35DaysContainer}>
                <b>{`uptime: `}</b>
                <span>{uptime}</span>
              </div>
              <div className={styles.users234}>
                <b>{`users: `}</b>
                <span>{num_users}</span>
              </div>
            </div>
            <div className={styles.footerContainer}>
              <Footer
                saveAndExit="generate report"
                propWidth="unset"
                propAlignSelf="stretch"
                onSaveAndExit={handleGenerateReport}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Show MessageBox when claim is filed */}
      {showMessageBox && <MessageBox message={message} onClose={handleCloseMessageBox} />}
    </div>
  );
};

export default AdminSystemConfig;
