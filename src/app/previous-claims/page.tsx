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
import { Claim, Item } from '@prisma/client';
import { buildOneEntityUrl, buildTwoEntityUrl, EntityType, HttpMethod } from '@/helpers/api';
import { jwtDecode } from 'jwt-decode';
import { DecodedToken } from '@/hooks/useRoleAuth';

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
    const fetchData = async () => {
      try {
        if (isClient) {
          const token = window.localStorage.getItem('token');
          if (token) {
            const decoded = jwtDecode<DecodedToken>(token);
            const claimsResponse = await fetch(
              buildTwoEntityUrl(HttpMethod.GET, EntityType.USER, decoded.id, EntityType.CLAIM),
              {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                }
              }
            );

            claimsResponse.ok
              ? console.log('Claims fetched successfully')
              : console.log('Claims fetch failed');

            const fetchedClaims: Claim[] = await claimsResponse.json();
            const details: DisplayDetails[] = await Promise.all(
              fetchedClaims.map(async (claim) => {
                const itemResponse = await fetch(
                  buildOneEntityUrl(HttpMethod.GET, EntityType.ITEM, claim.itemId),
                  {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  }
                );

                if (!itemResponse.ok) {
                  throw new Error('Network response was not ok');
                }

                const itemData: Item = await itemResponse.json();

                return {
                  name: itemData.name,
                  location: itemData.location,
                  date: claim.createdAt.toISOString(),
                  status: claim.status
                };
              })
            );

            const inProgress = details.filter((claimDetails) => claimDetails.status !== 'FOUND');
            const resolved = details.filter((claim) => claim.status === 'FOUND');

            setInProgressClaims(inProgress);
            setResolvedClaims(resolved);
          }
        }
      } catch (error) {
        console.error('Error fetching claims:', error);
      }
    };

    fetchData();
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
