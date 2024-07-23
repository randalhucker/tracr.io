/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import FrameComponent from '../../components/frame-component2';
import ClaimsList from '../../components/claims-list';
import styles from './admin-lost-items.module.scss';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';

const AdminLostItems: NextPage = () => {
  const handleClaimClick = () => {
    console.log('Claim button clicked');
    // Placeholder function for claim action
  };

  return (
    <div className={styles.adminLostItems}>
      <div className={styles.wrapperGroup9}>
        <img className={styles.wrapperGroup9Child} alt="" src="/group-9.svg" />
      </div>
      <FrameComponent group8="/group-8.svg" button="/button.svg" />
      <h1 className={styles.airpods}>
        <span className={styles.airpodsTxt}>
          <p className={styles.airpods1}>AirPods</p>
        </span>
      </h1>
      <div className={styles.claimsContentWrapper}>
        <div className={styles.claimsContent}>
          <ClaimsList onClaimClick={handleClaimClick} />
          <div className={styles.footer}>
            <div className={styles.footerContent}>
              <div className={styles.footerDivider} />
              <div className={styles.copyright}>
                <div className={styles.copyrightDetails}>
                  <div className={styles.copyrightDetailsChild} />
                  <b className={styles.coreDumpersLimited}>© Core Dumpers Limited 2024</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLostItems;
