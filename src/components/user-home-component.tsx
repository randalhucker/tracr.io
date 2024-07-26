/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import Button from './button';
import styles from '../app/user-home/user-home.module.scss';
import { useRouter } from 'next/navigation';
import ClaimDetails, { DisplayDetails } from './claim-details';
import { useEffect, useState } from 'react';
import useClientSide from '@/hooks/useClientSide';
import { jwtDecode } from 'jwt-decode';
import { DecodedToken } from '@/hooks/useRoleAuth';
import { buildOneEntityUrl, buildTwoEntityUrl, EntityType, HttpMethod } from '@/helpers/api';
import { Prisma, Claim, Item } from '@prisma/client';

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
  const [firstName, setFirstName] = useState('');

  const [in_progress_claims, setInProgressClaims] = useState<DisplayDetails[]>([]);

  const handleCreateNewClaimClick = () => {
    router.push('/create-new-claim');
  };

  const handleReportLostItemClick = () => {
    router.push('/report-found-item');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isClient) {
          const token = window.localStorage.getItem('token');
          if (token) {
            const decoded = jwtDecode<DecodedToken>(token);
            const response = await fetch(
              buildOneEntityUrl(HttpMethod.GET, EntityType.USER, decoded.id),
              {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                }
              }
            );

            if (!response.ok) {
              throw new Error('Network response was not ok');
            }

            const userData = await response.json();
            setFirstName(userData.firstName);

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
            setInProgressClaims(inProgress);
          } else {
            router.push('/login');
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [isClient, router]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.welcomeBackUserParent}>
            <h1 className={styles.welcomeBackUserContainer}>
              <p className={styles.welcomeBack}>welcome back,</p>
              <p className={styles.user}>
                <b>{firstName}</b>
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
