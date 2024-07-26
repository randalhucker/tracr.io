/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import DropdownComponent from './drop-down-list';
import styles from '../app/report-found-item/report-found-item.module.scss';
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
};

export type ReportComponentType = {
  className?: string;
  formTitle: string;
  onSubmit: (reportData: ReportData) => void;
};

const ReportComponent: NextPage<ReportComponentType> = ({
  className = '',
  formTitle = '',
  onSubmit = null
}) => {
  const router = useRouter();
  const isClient = useClientSide();

  const [locations, setLocations] = useState<Building[]>([]);

  const [reportData, setReportData] = useState<ReportData>({
    lat: '',
    long: '',
    date: null,
    description: '',
    location: null
  });

  const handleChange = (key: keyof ReportData, value: string | Date | Building | null) => {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isClient) {
          const response = await fetch(buildOneEntityUrl(HttpMethod.GET, EntityType.BUILDING), {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const locations: Building[] = await response.json();
          // Assuming userData contains fields for firstName, lastName, and email
          setLocations(locations);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [isClient]);

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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange('long', e.target.value)
          }
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
        rows={8} // Reduced the number of rows to make space for the dropdown
        cols={27}
        value={reportData.description}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          handleChange('description', e.target.value)
        }
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
      <div className={styles.dropdownParent}>
        <DropdownComponent
          locations={locations}
          onSelectLocation={(location: Building) => handleChange('location', location)}
          className={styles.dropdown}
        />
      </div>
    </div>
  );
};

export default ReportComponent;
