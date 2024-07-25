/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';
import MessageBox from '@/components/message-box';
import styles from '../app/report-found-item/report-found-item.module.scss';

export type ReportData = {
    lat: string;
    long: string;
    date: Date | null;
    description: string;
    };

export type ReportComponentType = {
    className?: string;
    formTitle: string;
    onSubmit: (reportData: ReportData) => void;
  };

const ReportComponent: NextPage<ReportComponentType> = ({ className = '', formTitle = '', onSubmit = null }) => {
    const [reportData, setReportData] = useState<ReportData>({
        lat: '',
        long: '',
        date: null,
        description: ''
      });
    
    const handleChange = (key: keyof ReportData, value: string | Date | null) => {
        setReportData((prevData) => ({ ...prevData, [key]: value }));
    };
  
  const handleSubmitClick = () => {
    if (onSubmit) {
        onSubmit(reportData);
    }
  };

  const handleUploadImageClick = () => {
    // Implement image upload functionality if needed
  };

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.location}>location</div>
      <div className={styles.description}>description</div>
      <div className={styles.image}>image</div>
      <div className={styles.dateFound}>date found</div>
      <div className={styles.input}>
        <input
          className={styles.label}
          placeholder="lat"
          type="text"
          value={reportData.lat}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('lat', e.target.value)}
        />
      </div>
      <div className={styles.input1}>
        <input
          className={styles.label1}
          placeholder="long"
          type="text"
          value={reportData.long}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('long', e.target.value)}
        />
      </div>
      <div className={styles.input2}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                value={reportData.date}
                onChange={(newValue: Date | null) => handleChange('date', newValue)}
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
        value={reportData.description}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange('description', e.target.value)}
        placeholder="Enter description here"
      />
      <div className={styles.image1Parent}>
        <img className={styles.image1Icon} alt="" src="/map.png" />
        <img className={styles.frameItem} loading="lazy" alt="" src="/line-4.svg" />
        <img className={styles.frameInner} alt="" src="/line-5.svg" />
      </div>
      <button className={styles.button} onClick={handleUploadImageClick}>
        <b className={styles.uploadImage}>upload image</b>
      </button>
      <div className={styles.foundItemReport}>{formTitle}</div>
      <button className={styles.button1} onClick={handleSubmitClick}>
        <b className={styles.submit}>submit</b>
      </button>
      <div className={styles.lineDiv} />
    </div>
  );
};

export default ReportComponent;