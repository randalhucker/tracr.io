/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import styles from './match-form-component.module.scss';
import { Building } from '@prisma/client';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';
import { jwtDecode } from 'jwt-decode';
import { buildOneEntityUrl, EntityType, HttpMethod } from '@/helpers/api';

export type ReportData = {
  lat: string;
  long: string;
  date: Date | null;
  description: string;
  location: Building | null;
  name: string;
};

export type MatchFormComponentType = {
  className?: string;
  report: ReportData;
};

const MatchFormComponent: NextPage<MatchFormComponentType> = ({
  className = '',
  report
}) => {
  const isClient = useClientSide();

  useEffect(() => {
    // API Call to get the claims that may match the report
  }, [isClient]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.location}>location</div>
      <div className={styles.location1}>{report.location.name}</div>
      <div className={styles.description}>description</div>
      <div className={styles.image}>image</div>
      <div className={styles.dateFound}>date found</div>
      <div className={styles.input}>
        <div className={styles.label}>{report.lat}</div>
      </div>
      <div className={styles.input1}>
      <div className={styles.label1}>{report.long}</div>
      </div>
      <div className={styles.input2}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value={report.date}
            slots={{
              textField: (params) => <TextField {...params} InputProps={{ readOnly: true }} />
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
      <div className={styles.input3}>{report.description}</div>
      <div className={styles.image1Parent}>
        <img className={styles.image1Icon} alt="" src="/map.png" />
        <img className={styles.frameItem} loading="lazy" alt="" src="/line-4.svg" />
        <img className={styles.frameInner} alt="" src="/line-5.svg" />
      </div>
      <div className={styles.foundItemReport}>{report.name}</div>
      <div className={styles.lineDiv} />
    </div>
  );
};

export default MatchFormComponent;
