/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { useState } from 'react';
import { TextField, Icon } from '@mui/material';
import { LocalizationProvider, DatePicker, DateBuilderReturnType } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Main from '../../components/main';
import styles from './report-found-item.module.scss';

const ReportFoundItem: NextPage = () => {
  const [inputDateTimePickerValue, setInputDateTimePickerValue] = useState<Date | null>(null);

  const handleUploadImageClick = () => {
    // Placeholder function for upload image button click
    console.log('Upload Image button clicked');
  };

  const handleSubmitClick = () => {
    // Placeholder function for submit button click
    console.log('Submit button clicked');
  };

  return (
    <div className={styles.reportFoundItem}>
      <Main group7="/group-7.svg" group8="/group-8.svg" button="/button.svg" />
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerContentChild} />
          <b className={styles.coreDumpersLimited}>© Core Dumpers Limited 2024</b>
        </div>
        <div className={styles.form}>
          <div className={styles.wrapperGroup9}>
            <img className={styles.wrapperGroup9Child} alt="" src="/group-9.svg" />
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
              <DatePicker
                value={inputDateTimePickerValue}
                onChange={(newValue: Date | null) => {
                  setInputDateTimePickerValue(newValue);
                }}
                sx={{}}
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
            </div>
            <textarea className={styles.input3} rows={11} cols={27} />
            <div className={styles.image1Parent}>
              <img className={styles.image1Icon} alt="" src="/frame-3@3x.png" />
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
    </div>
  );
};

export default ReportFoundItem;
