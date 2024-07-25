/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import { useState } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Main from '../../components/main';
import styles from './create-new-claim.module.scss';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';
import MessageBox from '@/components/message-box';
import ReportComponent, { ReportData } from '@/components/report-component';

const CreateNewClaim: NextPage = () => {
  const router = useRouter();

  const [showMessageBox, setShowMessageBox] = useState(false);
  const [message, setMessage] = useState('Your claim has been successfully submitted!');
  let reportData: ReportData = {
    lat: '',
    long: '',
    date: null,
    description: '',
    location: ''
  };

  const handleUploadImageClick = () => {
    console.log('Upload Image button clicked');
    // API call to upload image
  };

  const handleComponentSubmit = (reportDataInput: ReportData) => {
    // function to evoke when the report is submitted

    // Set report data
    reportData = reportDataInput;

    // API call to create report
    console.log('Report submitted:', reportData);
    setShowMessageBox(true); // Show message box on submit
  };

  const handleCloseMessageBox = () => {
    setShowMessageBox(false);
    router.push('/user-home');
  };

  return (
    <div className={styles.createNewClaim}>
      <Main back="/back.svg" settings="/settings.svg" messages="/messages.svg" />
      <div className={styles.footer}>
        <div className={styles.wrapperGroup9Parent}>
          <div className={styles.wrapperGroup9}>
            <img className={styles.wrapperGroup9Child} alt="" src="/background.svg" />
          </div>
          <ReportComponent formTitle="lost item claim" onSubmit={handleComponentSubmit} />
        </div>
      </div>
      {/* Show MessageBox when claim is filed */}
      {showMessageBox && <MessageBox message={message} onClose={handleCloseMessageBox} />}
    </div>
  );
};

export default CreateNewClaim;
