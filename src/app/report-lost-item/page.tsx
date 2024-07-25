/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Main from '../../components/main';
import styles from './report-lost-item.module.scss';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';
import MessageBox from '@/components/message-box';

const ReportLostItem: NextPage = () => {
  const router = useRouter();

  const [inputDateTimePickerValue, setInputDateTimePickerValue] = useState<Date | null>(null);
  const [description, setDescription] = useState('');
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [message, setMessage] = useState('');

  const handleUploadImageClick = () => {
    console.log('Upload Image button clicked');
    // API call to upload image
  };

  const handleSubmitClick = () => {
    // API call to submit lost item report
    setShowMessageBox(true); // Show message box on submit
  };

  const handleCloseMessageBox = () => {
    setShowMessageBox(false);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  return (
    <div className={styles.reportFoundItem}>
      <Main back="/back.svg" settings="/settings.svg" messages="/messages.svg" />
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerContentChild} />
          <b className={styles.coreDumpersLimited}>© Core Dumpers Limited 2024</b>
        </div>
        <div className={styles.form}>
          <div className={styles.wrapperGroup9}>
            <img className={styles.wrapperGroup9Child} alt="" src="/background.svg" />
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.location}>location</div>
            <div className={styles.description}>description</div>
            <div className={styles.image}>image</div>
            <div className={styles.dateFound}>date found</div>
            <div className={styles.input}>
              <input className={styles.label} placeholder="lat" type="text" />
            </div>
            <div className={styles.input1}>
              <input className={styles.label1} placeholder="long" type="text" />
            </div>
            <div className={styles.input2}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={inputDateTimePickerValue}
                  onChange={(newValue: Date | null) => {
                    setInputDateTimePickerValue(newValue);
                  }}
                  slots={{
                    textField: (params) => <TextField {...params} />
                  }}
                  slotProps={{
                    textField: {
                      name: '',
                      id: '',
                      size: 'medium',
                      fullWidth: false,
                      required: false,
                      autoFocus: false,
                      error: false,
                      color: 'primary'
                    },
                    openPickerIcon: {
                      component: () => <></>
                    }
                  }}
                />
              </LocalizationProvider>
            </div>
            <textarea
              className={styles.input3}
              rows={11}
              cols={27}
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Enter description here"
            />
            <div className={styles.image1Parent}>
              <img className={styles.image1Icon} alt="" src="/map.png" />
              <img className={styles.frameItem} loading="lazy" alt="" src="/line-4.svg" />
              <img className={styles.frameInner} alt="" src="/line-5.svg" />
            </div>
            <button className={styles.button} onClick={handleUploadImageClick}>
              <img className={styles.vuesaxlinearcircleIcon} alt="" src="/vuesaxlinearcircle.svg" />
              <b className={styles.uploadImage}>upload image</b>
            </button>
            <div className={styles.foundItemReport}>found item report</div>
            <button className={styles.button1} onClick={handleSubmitClick}>
              <img
                className={styles.vuesaxlinearcircleIcon1}
                alt=""
                src="/vuesaxlinearcircle.svg"
              />
              <b className={styles.submit}>submit</b>
            </button>
            <div className={styles.lineDiv} />
          </div>
        </div>
      </div>

      {/* Show MessageBox when claim is filed */}
      {showMessageBox && <MessageBox message={message} onClose={handleCloseMessageBox} />}
    </div>
  );
};

export default ReportLostItem;
