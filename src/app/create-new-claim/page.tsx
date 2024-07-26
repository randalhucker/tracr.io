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
import { jwtDecode } from 'jwt-decode';
import { DecodedToken } from '@/hooks/useRoleAuth';
import { buildOneEntityUrl, EntityType, HttpMethod } from '@/helpers/api';

const CreateNewClaim: NextPage = () => {
  const router = useRouter();
  const isClient = useClientSide();

  const [showMessageBox, setShowMessageBox] = useState(false);
  const [message, setMessage] = useState('Your claim has been successfully submitted!');

  const handleUploadImageClick = () => {
    console.log('Upload Image button clicked');
    // API call to upload image
  };

  const handleComponentSubmit = async (reportDataInput: ReportData) => {
    // function to evoke when the report is submitted
    console.log('Creating claim...');
    try {
      if (isClient) {
        const token = window.localStorage.getItem('token');
        if (token) {
          const decoded = jwtDecode<DecodedToken>(token);
          const response = await fetch(buildOneEntityUrl(HttpMethod.POST, EntityType.CLAIM), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            // TODO: Update itemId to the actual item id
            body: JSON.stringify({
              description: reportDataInput.description,
              status: 'LOST',
              itemId: 1,
              userId: decoded.id
            })
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          console.log('Report submitted successfully');
          setShowMessageBox(true); // Show message box on submit
        }
      }
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  const handleCloseMessageBox = () => {
    setShowMessageBox(false);
  };

  return (
    <div className={styles.createNewClaim}>
      <Main back="/back.svg" settings="/settings.svg" messages="/messages.svg" home="/home.svg" />
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
