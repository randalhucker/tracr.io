import type { NextPage } from 'next';
import styles from './claims-list.module.css';

export type ClaimsListType = {
  className?: string;
  onClaimClick?: () => void; // Added callback prop for handling claim click events
};

const ClaimsList: NextPage<ClaimsListType> = ({ className = '', onClaimClick }) => {
  return (
    <div className={[styles.claimsList, className].join(' ')}>
      <div className={styles.claimsListChild} />
      <h1 className={styles.claims}>claims</h1>
      <div className={styles.claimItems}>
        <div className={styles.frameParent}>
          <div className={styles.inProgressStatusContainerParent}>
            <div className={styles.inProgressStatusContainer}>
              <h1 className={styles.inProgress}>in progress</h1>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer} onClick={onClaimClick}>
                <div className={styles.airpodsParent}>
                  <h1 className={styles.airpods}>
                    <p className={styles.airpods1}>AirPods</p>
                  </h1>
                  <h3 className={styles.smithHall}>Smith Hall | Apr. 27</h3>
                </div>
                <div className={styles.randyHParent}>
                  <b className={styles.randyH}>randy h.</b>
                  <div className={styles.statusNotFoundContainer}>
                    <span>{`status: `}</span>
                    <span className={styles.notFound}>not found</span>
                  </div>
                </div>
              </div>
              <div className={styles.duplicateItemsParent}>
                <div className={styles.duplicateItems}>
                  <div className={styles.duplicateItemDetails} />
                </div>
                <div className={styles.frameWrapper} onClick={onClaimClick}>
                  <div className={styles.pendingStatusContainerParent}>
                    <div className={styles.pendingStatusContainer}>
                      <div className={styles.pendingStatusContainerInner}>
                        <div className={styles.bearcatCardParent}>
                          <h1 className={styles.bearcatCard}>Bearcat Card</h1>
                          <div className={styles.baldwinHallMay2Wrapper}>
                            <h3 className={styles.baldwinHall}>Baldwin Hall | May 2</h3>
                          </div>
                        </div>
                      </div>
                      <div className={styles.randyHGroup}>
                        <b className={styles.randyH1}>randy h.</b>
                        <div className={styles.statusPending}>
                          <span>{`status: `}</span>
                          <span className={styles.pending}>pending</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divider}>
                      <div className={styles.dividerChild} />
                    </div>
                  </div>
                </div>
                <div className={styles.duplicateItems1}>
                  <div className={styles.frameDiv} onClick={onClaimClick}>
                    <div className={styles.airpodsGroup}>
                      <h1 className={styles.airpods2}>
                        <p className={styles.airpods3}>AirPods</p>
                      </h1>
                      <h3 className={styles.smithHall1}>Smith Hall | Apr. 27</h3>
                    </div>
                    <div className={styles.duplicateReporter}>
                      <b className={styles.bearnardB}>bearnard b.</b>
                      <div className={styles.statusNotFoundContainer1}>
                        <span>{`status: `}</span>
                        <span className={styles.notFound1}>not found</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.duplicateItems2}>
                  <div className={styles.duplicateItemsChild} />
                </div>
                <div className={styles.duplicateItems3}>
                  <div className={styles.frameParent1} onClick={onClaimClick}>
                    <div className={styles.airpodsContainer}>
                      <h1 className={styles.airpods4}>
                        <p className={styles.airpods5}>AirPods</p>
                      </h1>
                      <h3 className={styles.smithHall2}>Smith Hall | Apr. 27</h3>
                    </div>
                    <div className={styles.frankParent}>
                      <b className={styles.frank}>frank</b>
                      <div className={styles.statusNotFoundContainer2}>
                        <span>{`status: `}</span>
                        <span className={styles.notFound2}>not found</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.duplicateItems4}>
                  <div className={styles.duplicateItemsItem} />
                </div>
                <div className={styles.frameParent2} onClick={onClaimClick}>
                  <div className={styles.airpodsParent1}>
                    <h1 className={styles.airpods6}>
                      <p className={styles.airpods7}>AirPods</p>
                    </h1>
                    <h3 className={styles.smithHall3}>Smith Hall | Apr. 27</h3>
                  </div>
                  <div className={styles.hughJParent}>
                    <b className={styles.hughJ}>hugh j.</b>
                    <div className={styles.statusNotFoundContainer3}>
                      <span>{`status: `}</span>
                      <span className={styles.notFound3}>not found</span>
                    </div>
                  </div>
                </div>
                <div className={styles.duplicateItems5}>
                  <div className={styles.duplicateItemsInner} />
                </div>
                <div className={styles.unknownItem} onClick={onClaimClick}>
                  <b className={styles.what}>what</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.lineWrapper}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.resolvedTitleParent}>
            <div className={styles.resolvedTitle}>
              <h1 className={styles.resolved}>resolved</h1>
            </div>
            <div className={styles.resolvedItems} onClick={onClaimClick}>
              <div className={styles.resolvedItemsInner}>
                <div className={styles.shoesParent}>
                  <h1 className={styles.shoes}>Shoes</h1>
                  <h3 className={styles.recCenter}>Rec Center | Mar. 27</h3>
                </div>
              </div>
              <div className={styles.randyHContainer}>
                <b className={styles.randyH2}>randy h.</b>
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
  );
};

export default ClaimsList;
