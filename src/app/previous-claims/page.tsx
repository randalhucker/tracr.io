/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import Main from '../../components/main';
import styles from './previous-claims.module.scss';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';
import { useEffect, useState } from 'react';
import { DisplayDetails } from '@/components/claim-details';
import ClaimDetails from '@/components/claim-details';

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

const PreviousClaims: NextPage = () => {
  const router = useRouter();
  const isClient = useClientSide();

  const [in_progress_claims, setInProgressClaims] = useState<DisplayDetails[]>([]);
  const [resolved_claims, setResolvedClaims] = useState<DisplayDetails[]>([]);

  useEffect(() => {
    if (isClient) {
      // API call to get all previous claims for a given user

      // Transform response into array of DisplayDetails objects (may involve some weirdness with the dates)

      // Test data
      const fetchedClaims = [airpods, bearcatCard, shoes];

      // Sort claims into inProgressClaims and resolvedClaims
      const inProgress = fetchedClaims.filter((claim) => claim.status !== 'found');
      const resolved = fetchedClaims.filter((claim) => claim.status === 'found');

      setInProgressClaims(inProgress);
      setResolvedClaims(resolved);
    }
  }, [isClient]);

  return (
    <div className={styles.previousClaims}>
      <div className={styles.wrapperGroup9}>
        <img className={styles.wrapperGroup9Child} alt="" src="/background.svg" />
      </div>
      <Main back="/back.svg" settings="/settings.svg" messages="/messages.svg" home="/home.svg" />
      <div className={styles.claimsListContainerWrapper}>
        <div className={styles.claimsListContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <h1 className={styles.claims}>claims</h1>
            <div className={styles.inProgressClaimContainer}>
              <div className={styles.inProgressClaimDetails}>
                <div className={styles.inProgressClaimItems}>
                  <div className={styles.inProgressClaimItem}>
                    <h1 className={styles.inProgress}>in progress</h1>
                  </div>
                  <div className={styles.itemDetailsContainer}>
                    {in_progress_claims.map((claim, index) => (
                      <ClaimDetails key={index} details={claim} />
                    ))}
                  </div>
                </div>
                <div className={styles.resolvedSeparator}>
                  <div className={styles.resolvedSeparatorChild} />
                </div>
                <div className={styles.resolvedClaimDetails}>
                  <div className={styles.resolvedClaimItem}>
                    <h1 className={styles.resolved}>resolved</h1>
                  </div>
                  <div className={styles.itemDetailsContainer}>
                    {resolved_claims.map((claim, index) => (
                      <ClaimDetails key={index} details={claim} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousClaims;
