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
import { ClaimsColumn } from './claims-list';
import { DisplayDetails } from './claim-details';

// This will probably be changed based on what we decide to pass to the component
export type ReportData1 = {
  lat: string;
  long: string;
  date: Date | null;
  description: string;
  location: Building | null;
  name: string;
};

export type MatchFormComponentType = {
  className?: string;
  report: ReportData1;
};

// Test matches
const match1: DisplayDetails = { name: 'Test Match 1', location: 'Test Building 1', date: '2/2/2022', status: 'pending'};
const match2: DisplayDetails = { name: 'Test Match 2', location: 'Test Building 2', date: '2/2/2022', status: 'pending'};

const test_possible_matches: DisplayDetails[] = [match1, match2]

const MatchFormComponent: NextPage<MatchFormComponentType> = ({
  className = '',
  report
}) => {
  const isClient = useClientSide();
  const [possible_matches, setPossibleMatches] = useState<DisplayDetails[]>([]);

  useEffect(() => {
    // API Call to get the claims that may match the report
    setPossibleMatches(test_possible_matches);
  }, [isClient]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild}>
        <div className={styles.location}>location</div>
        <div className={styles.location1}>{report.location.name}</div>
        <div className={styles.description}>description</div>
        <div className={styles.image}>image</div>
        <div className={styles.dateFound}>date found</div>
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
        <div className={styles.foundItemReport}>{report.name}</div>
        <div className={styles.lineDiv} />
      </div>
      <div className={styles.frameChild1}>
        <ClaimsColumn header="Possible Matches" claims={possible_matches} />
      </div>
    </div>
  );
};

export default MatchFormComponent;
