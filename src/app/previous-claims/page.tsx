/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import Main from '../../components/main';
import styles from './previous-claims.module.scss';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';

// Need to either convert to dynamically grabbing the claims and loading them, or account for static claim entries in the demo

const PreviousClaims: NextPage = () => {
  return (
    <div className={styles.previousClaims}>
      <div className={styles.wrapperGroup9}>
        <img className={styles.wrapperGroup9Child} alt="" src="/background.svg" />
      </div>
      <Main back="/back.svg" settings="/settings.svg" messages="/messages.svg" />
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
                    <div className={styles.itemDetails}>
                      <div className={styles.itemDescription}>
                        <h1 className={styles.airpods}>
                          <p className={styles.airpods1}>AirPods</p>
                        </h1>
                        <div className={styles.airpodsLocation}>
                          <h3 className={styles.smithHall}>Smith Hall | Apr. 27</h3>
                          <div className={styles.airpodsStatus}>
                            <div className={styles.statusNotFoundContainer}>
                              <span>{`status: `}</span>
                              <span className={styles.notFound}>not found</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.itemSeparator}>
                      <div className={styles.itemSeparatorChild} />
                    </div>
                    <div className={styles.bearcatCardDetails}>
                      <h1 className={styles.bearcatCard}>Bearcat Card</h1>
                      <div className={styles.bearcatCardLocation}>
                        <div className={styles.bearcatCardDate}>
                          <h3 className={styles.baldwinHall}>Baldwin Hall | May 2</h3>
                          <div className={styles.bearcatCardStatus}>
                            <div className={styles.statusPending}>
                              <span>{`status: `}</span>
                              <span className={styles.pending}>pending</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.resolvedSeparator}>
                  <div className={styles.resolvedSeparatorChild} />
                </div>
                <div className={styles.resolvedClaimDetails}>
                  <div className={styles.resolvedClaimItem}>
                    <h1 className={styles.resolved}>resolved</h1>
                  </div>
                  <div className={styles.shoesDetailsContainer}>
                    <h1 className={styles.shoes}>Shoes</h1>
                    <div className={styles.shoesLocation}>
                      <h3 className={styles.recCenter}>Rec Center | Mar. 27</h3>
                      <div className={styles.shoesStatus}>
                        <div className={styles.statusFound}>
                          <span>{`status: `}</span>
                          <span className={styles.found}>found</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className={styles.footerContainerWrapper}>
            <div className={styles.footerContainer}>
              <div className={styles.footerContainerChild} />
              <b className={styles.coreDumpersLimited}>© Core Dumpers Limited 2024</b>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PreviousClaims;
