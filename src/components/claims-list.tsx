'use client';
import type { NextPage } from 'next';
import styles from '../app/previous-claims/previous-claims.module.scss';
import ClaimDetails, { DisplayDetails } from './claim-details';
import { useEffect, useState } from 'react';
import { Claim, Item, User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';
import { buildOneEntityUrl, EntityType, HttpMethod } from '@/helpers/api';

export type ClaimsListType = {
  className?: string;
  title: string;
  left_header: string;
  right_header: string;
  left_claims: DisplayDetails[];
  right_claims: DisplayDetails[];
  onClick?: () => void;
};

const ClaimsList: NextPage<ClaimsListType> = ({
  className = '',
  title,
  left_header,
  right_header,
  left_claims,
  right_claims,
  onClick
}) => {
  const [leftClaims, setLeftClaims] = useState<DisplayDetails[]>([]);
  const [rightClaims, setRightClaims] = useState<DisplayDetails[]>([]);
  const clientSide = useClientSide();

  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const claimsResponse = await fetch(buildOneEntityUrl(HttpMethod.GET, EntityType.CLAIM)); // Update the URL to your actual API endpoint
        if (!claimsResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const claimsData: Claim[] = await claimsResponse.json();

        const claimsWithItems = await Promise.all(
          claimsData.map(async (claim) => {
            const itemResponse = await fetch(
              buildOneEntityUrl(HttpMethod.GET, EntityType.ITEM, claim.id)
            ); // Update the URL to your actual API endpoint
            const userResponse = await fetch(
              buildOneEntityUrl(HttpMethod.GET, EntityType.USER, claim.userId)
            ); // Update the URL to your actual API endpoint
            if (!itemResponse.ok || !userResponse.ok) {
              throw new Error('Network response was not ok');
            }
            const itemData: Item = await itemResponse.json();
            const userData: User = await userResponse.json();
            return {
              name: itemData.name,
              location: itemData.location,
              date: itemData.createdAt.toString(), // Assuming createdAt is a date field
              status: claim.status
            };
          })
        );

        // Assuming leftClaims are claims with status not 'FOUND' and rightClaims are with status 'FOUND'
        setLeftClaims(claimsWithItems.filter((claim) => claim.status !== 'FOUND'));
        setRightClaims(claimsWithItems.filter((claim) => claim.status === 'FOUND'));
      } catch (error) {
        console.error('Error fetching claims or items:', error);
      }
    };

    if (clientSide) {
      fetchClaims();
    }
  }, [clientSide]);

  return (
    <div className={[styles.claimsListContainerWrapper, className].join(' ')}>
      <div className={styles.claimsListContainer}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <h1 className={styles.claims}>{title}</h1>
          <div className={styles.inProgressClaimContainer}>
            <div className={styles.inProgressClaimDetails}>
              <div className={styles.inProgressClaimItems}>
                <div className={styles.inProgressClaimItem}>
                  <h1 className={styles.inProgress}>{left_header}</h1>
                </div>
                <div className={styles.itemDetailsContainer}>
                  {leftClaims.map((claim, index) => (
                    <ClaimDetails key={index} details={claim} handleClick={onClick} />
                  ))}
                </div>
              </div>
              <div className={styles.resolvedSeparator}>
                <div className={styles.resolvedSeparatorChild} />
              </div>
              <div className={styles.resolvedClaimDetails}>
                <div className={styles.resolvedClaimItem}>
                  <h1 className={styles.resolved}>{right_header}</h1>
                </div>
                <div className={styles.itemDetailsContainer}>
                  {rightClaims.map((claim, index) => (
                    <ClaimDetails key={index} details={claim} handleClick={onClick} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimsList;
