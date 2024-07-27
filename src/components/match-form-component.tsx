/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import styles from './match-form-component.module.scss';
import { Building, Claim, Item, Report } from '@prisma/client';
import useClientSide from '@/hooks/useClientSide';
import { ClaimsColumn } from './claims-list';
import { DisplayDetails } from './claim-details';
import MessageBox from './message-box';
import build from 'next/dist/build';
import { buildOneEntityUrl, EntityType, HttpMethod } from '@/helpers/api';
import { useRouter } from 'next/navigation';

export type ReportItem = {
  report: Report;
  location: string;
};

export type MatchFormComponentType = {
  reportItem: ReportItem;
  className?: string;
};

// Test matches
const match1: DisplayDetails = {
  name: 'Test Match 1',
  location: 'Test Building 1',
  date: '2/2/2022',
  status: 'pending'
};
const match2: DisplayDetails = {
  name: 'Test Match 2',
  location: 'Test Building 2',
  date: '2/2/2022',
  status: 'pending'
};

const test_possible_matches: DisplayDetails[] = [match1, match2];

const MatchFormComponent: NextPage<MatchFormComponentType> = ({ className = '', reportItem }) => {
  const isClient = useClientSide();
  const router = useRouter();
  const [possible_matches, setPossibleMatches] = useState<DisplayDetails[]>([]);

  const [showMessageBox, setShowMessageBox] = useState(false);
  const [message, setMessage] = useState('Your report has been successfully submitted!');

  const handleMatchClick = async (claimNumber: number) => {
    if (isClient) {
      console.log(`Match button ${claimNumber} clicked`);
      const claimUpdateResponse = await fetch(
        buildOneEntityUrl(HttpMethod.PUT, EntityType.CLAIM, claimNumber),
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            status: 'FOUND'
          })
        }
      );

      const reportUpdateResponse = await fetch(
        buildOneEntityUrl(HttpMethod.PUT, EntityType.REPORT, reportItem.report.id),
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            status: 'FOUND'
          })
        }
      );

      if (!claimUpdateResponse.ok || !reportUpdateResponse.ok) {
        console.error('Failed to update claim or report status');
        return;
      }

      setMessage('Match successfully created! Redirecting to messages to notify user...');
      setShowMessageBox(true);
    }
  };

  const handleCloseMessageBox = () => {
    setShowMessageBox(false);
    router.push('/admin-messages');
  };

  useEffect(() => {
    const fetchData = async () => {
      if (isClient) {
        const response = await fetch(buildOneEntityUrl(HttpMethod.GET, EntityType.CLAIM));
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Claim[] = await response.json();

        const possibleMatches = await Promise.all(
          data.map(async (claim) => {
            const itemResponse = await fetch(
              buildOneEntityUrl(HttpMethod.GET, EntityType.ITEM, claim.itemId ?? 0)
            );
            if (!itemResponse.ok) {
              throw new Error('Network response was not ok');
            }
            const itemData: Item = await itemResponse.json();
            return {
              name: itemData.name,
              location: itemData.location,
              date: itemData.createdAt.toString(),
              status: claim.status
            };
          })
        );

        setPossibleMatches(possibleMatches);
      }
    };

    fetchData();
  }, [isClient]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild}>
        <div className={styles.location}>location</div>
        <div className={styles.location1}>{reportItem.location}</div>
        <div className={styles.description}>description</div>
        <div className={styles.image}>image</div>
        <div className={styles.dateFound}>date found</div>
        <div className={styles.input2}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={reportItem.report.createdAt}
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
        <div className={styles.input3}>{reportItem.report.description}</div>
        <div className={styles.foundItemReport}>{reportItem.report.description.split(' ')[0]}</div>
        <div className={styles.lineDiv} />
      </div>
      <div className={styles.frameChild1}>
        <ClaimsColumn
          header="Possible Matches"
          claims={possible_matches}
          onClick={handleMatchClick}
        />
      </div>
      {/* Show MessageBox when claim is filed */}
      {showMessageBox && <MessageBox message={message} onClose={handleCloseMessageBox} />}
    </div>
  );
};

export default MatchFormComponent;
