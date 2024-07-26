/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Main from '../../components/main';
import styles from './report-found-item.module.scss';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';
import MessageBox from '@/components/message-box';
import ReportComponent, { ReportData } from '@/components/report-component';
import { jwtDecode } from 'jwt-decode';
import { DecodedToken } from '@/hooks/useRoleAuth';
import { buildOneEntityUrl, EntityType, HttpMethod } from '@/helpers/api';
import { Item } from '@prisma/client';

const ReportFoundItem: NextPage = () => {
  const router = useRouter();
  const isClient = useClientSide();

  const [showMessageBox, setShowMessageBox] = useState(false);
  const [message, setMessage] = useState('Your report has been successfully submitted!');
  const reportData: ReportData = {
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

  const handleComponentSubmit = async (reportDataInput: ReportData) => {
    // function to evoke when the report is submitted
    console.log('Creating report...');
    try {
      if (isClient) {
        const token = window.localStorage.getItem('token');
        if (token) {
          const decoded = jwtDecode<DecodedToken>(token);
          // TODO: Update the fetch to use the actual buildingId
          const itemResponse = await fetch(buildOneEntityUrl(HttpMethod.POST, EntityType.ITEM), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: reportDataInput.description,
              description: reportDataInput.description,
              location: reportDataInput.location,
              status: 'FOUND',
              category: '',
              buildingId: 1
            })
          });

          if (!itemResponse.ok) {
            throw new Error('Network response was not ok');
          }

          const item: Item = await itemResponse.json();

          const response = await fetch(buildOneEntityUrl(HttpMethod.POST, EntityType.REPORT), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              description: item.description,
              status: item.status,
              itemId: item.id,
              userId: decoded.id
            })
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          console.log('Report submitted:', reportData);
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
    <div className={styles.reportFoundItem}>
      <Main back="/back.svg" settings="/settings.svg" messages="/messages.svg" home="/home.svg" />
      <div className={styles.footer}>
        <div className={styles.form}>
          <div className={styles.wrapperGroup9}>
            <img className={styles.wrapperGroup9Child} alt="" src="/background.svg" />
          </div>
          <ReportComponent formTitle="found item report" onSubmit={handleComponentSubmit} />
        </div>
      </div>
      {/* Show MessageBox when claim is filed */}
      {showMessageBox && <MessageBox message={message} onClose={handleCloseMessageBox} />}
    </div>
  );
};

export default ReportFoundItem;
