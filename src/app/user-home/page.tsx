/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import FrameComponent from '../../components/frame-component';
import Button from '../../components/button';
import styles from './user-home.module.scss';

const UserHome: NextPage = () => {
  // Placeholder functions for button clicks
  const handleCreateNewClaimClick = () => {
    console.log('Create New Claim button clicked');
  };

  const handleReportLostItemClick = () => {
    console.log('Report Lost Item button clicked');
  };

  return (
    <div className={styles.userHome}>
      <div className={styles.wrapperGroup9}>
        <img className={styles.wrapperGroup9Child} alt="" src="/group-22.svg" />
      </div>
      <FrameComponent />
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
                  vuesaxlinearcircle="/vuesaxlinearcircle.svg"
                  createNewClaim="create new claim"
                  page1="/page1.svg"
                  onClick={handleCreateNewClaimClick} // Pass the function as a prop
                />
                <Button
                  vuesaxlinearcircle="/vuesaxlinearcircle.svg"
                  createNewClaim="report lost item"
                  page1="/magnifyingglasssvgrepocom-2-1.svg"
                  onClick={handleReportLostItemClick} // Pass the function as a prop
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
          <footer className={styles.footer}>
            <div className={styles.copyright}>
              <div className={styles.copyrightChild} />
              <b className={styles.coreDumpersLimited}>© Core Dumpers Limited 2024</b>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
