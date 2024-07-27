import React from 'react';
import styles from '../app/previous-claims/previous-claims.module.scss';
import { NextPage } from 'next';
import { empty } from '@prisma/client/runtime/library';

export type DisplayDetails = {
  name: string;
  location: string;
  date: string;
  status: string;
  id?: number;
};

export type ClaimDetailsComponentType = {
  className?: string;
  details: DisplayDetails;
  handleClick?: () => void;
};

export type ClaimStatusStylingType = {
  className?: string;
  status_input: string;
};

const emptyDetails: DisplayDetails = {
  name: '',
  location: '',
  date: '',
  status: ''
};

const ClaimDetails: NextPage<ClaimDetailsComponentType> = ({
  className = '',
  details = emptyDetails,
  handleClick = () => {}
}) => {
  return (
    <div className={styles.itemDetails}>
      <div className={styles.itemDescription}>
        <h1 className={styles.item}>
          <p className={styles.item1} onClick={handleClick}>
            {details.name}
          </p>
        </h1>
        <div className={styles.itemLocation}>
          <h3 className={styles.location}>
            {details.location} | {details.date}
          </h3>
          <div className={styles.itemStatus}>
            <StatusStyling status_input={details.status} />
          </div>
        </div>
      </div>
      <div className={styles.itemSeparator}>
        <div className={styles.itemSeparatorChild} />
      </div>
    </div>
  );
};

const StatusStyling: NextPage<ClaimStatusStylingType> = ({ className = '', status_input = '' }) => {
  switch (status_input.toLowerCase()) {
    case 'found':
      return (
        <div className={styles.foundContainer}>
          <span>{`status: `}</span>
          <span className={styles.found}>{status_input}</span>
        </div>
      );
    case 'not found':
      return (
        <div className={styles.notFoundContainer}>
          <span>{`status: `}</span>
          <span className={styles.notFound}>{status_input}</span>
        </div>
      );
    case 'pending':
      return (
        <div className={styles.pendingContainer}>
          <span>{`status: `}</span>
          <span className={styles.pending}>{status_input}</span>
        </div>
      );
    default:
      return '';
  }
};

export default ClaimDetails;
