/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import Button from './button';
import styles from '../app/user-home/user-home.module.scss';
import { useRouter } from 'next/navigation';
import ClaimDetails, { DisplayDetails } from './claim-details';
import { useEffect, useState } from 'react';
import useClientSide from '@/hooks/useClientSide';

// Test Claims
const airpods: DisplayDetails = {
  name: 'AirPods',
  location: 'Smith Hall',
  date: 'Apr. 27',
  status: 'not found'
};
const bearcatCard: DisplayDetails = {
  name: 'Bearcat Card',
  location: 'Baldwin Hall',
  date: 'May 2',
  status: 'pending'
};
const shoes: DisplayDetails = {
  name: 'Shoes',
  location: 'Rec Center',
  date: 'Mar. 27',
  status: 'found'
};

export type UserHomeComponentType = {
  className?: string;
};

const UserHomeComponent: NextPage<UserHomeComponentType> = ({ className = '' }) => {
  const router = useRouter();
  const isClient = useClientSide();

  const [in_progress_claims, setInProgressClaims] = useState<DisplayDetails[]>([]);

  useEffect(() => {
    if (isClient) {
      // API call to get all previous claims for a given user

      // Transform response into array of DisplayDetails objects (may involve some weirdness with the dates)

      // Test data
      const fetchedClaims = [airpods, bearcatCard, shoes];

      // Sort claims into inProgressClaims
      const inProgress = fetchedClaims.filter((claim) => claim.status !== 'found');
      setInProgressClaims(inProgress);
    }
  }, [isClient]);

  const handleCreateNewClaimClick = () => {
    router.push('/create-new-claim');
  };

  const handleReportLostItemClick = () => {
    router.push('/report-found-item');
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.welcomeBackUserParent}>
            <h1 className={styles.welcomeBackUserContainer}>
              <p className={styles.welcomeBack}>welcome back,</p>
              <p className={styles.user}>
                <b>User</b>
              </p>
            </h1>
            <div className={styles.actionButtons}>
              <Button
                text="create new claim"
                icon="/page1.svg"
                onClick={handleCreateNewClaimClick}
              />
              <Button
                text="report found item"
                icon="/magnifyingglasssvgrepocom-2-1.svg"
                onClick={handleReportLostItemClick}
              />
            </div>
          </div>
          <div className={styles.claimsListWrapper}>
            <div className={styles.claimsList}>
              <div className={styles.claimHeaders}>
                <div className={styles.currentClaims}>
                  <h1 className={styles.currentClaims1}>current claims</h1>
                </div>
                <div className={styles.headerDivider} />
              </div>
              <div className={styles.claimItems}>
                {in_progress_claims.map((claim, index) => (
                  <ClaimDetails key={index} details={claim} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHomeComponent;
