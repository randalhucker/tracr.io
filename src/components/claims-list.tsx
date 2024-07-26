'use client';
import type { NextPage } from 'next';
import styles from '../app/previous-claims/previous-claims.module.scss';
import ClaimDetails, { DisplayDetails } from './claim-details';

export type ClaimsListType = {
  className?: string;
  title: string;
  left_header: string;
  right_header: string;
  left_claims: DisplayDetails[];
  right_claims: DisplayDetails[];
  onClick?: () => void;
};

const ClaimsList: NextPage<ClaimsListType> = ({ className = '', title, left_header, right_header, left_claims, right_claims, onClick }) => {
  return (
    <div className={styles.claimsListContainerWrapper}>
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
                    {left_claims.map((claim, index) => (
                      <ClaimDetails key={index} details={claim} handleClick={onClick}/>
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
                    {right_claims.map((claim, index) => (
                      <ClaimDetails key={index} details={claim} handleClick={onClick}/>
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
