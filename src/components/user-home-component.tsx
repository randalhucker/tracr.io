/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import Button from './button';
import styles from '../app/user-home/user-home.module.scss';
import { useRouter } from 'next/navigation';

export type UserHomeComponentType = {
    className?: string;
  };

const UserHomeComponent: NextPage<UserHomeComponentType> = ({ className = '' }) => {
  const router = useRouter();

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
                <div className={styles.airpodsParent}>
                  <h1 className={styles.airpods}>
                    <p className={styles.airpods1}>AirPods</p>
                  </h1>
                  <h3 className={styles.smithHall}>Smith Hall | Apr. 27</h3>
                  <div className={styles.fbf474d5f22}>4fbf474d5f22</div>
                </div>
                <div className={styles.itemDivider}>
                  <div className={styles.itemDividerChild} />
                </div>
                <h1 className={styles.bearcatCard}>Bearcat Card</h1>
                <div className={styles.baldwinHallMay2Parent}>
                  <h3 className={styles.baldwinHall}>Baldwin Hall | May 2</h3>
                  <div className={styles.cfb807629ad6}>cfb807629ad6</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHomeComponent;
