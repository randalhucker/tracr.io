import type { NextPage } from 'next';
import Main from '../../components/main';
import Button from '../../components/button';
import styles from './message.module.scss';

const Message: NextPage = () => {
  return (
    <div className={styles.message}>
      <div className={styles.wrapperGroup9}>
        <img className={styles.wrapperGroup9Child} alt="" src="/group-9.svg" />
      </div>
      <Main group7="/group-71.svg" group8="/group-83.svg" button="/button3.svg" />
      <div className={styles.messageInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.welcomeBackUserParent}>
                <h1 className={styles.welcomeBackUserContainer}>
                  <p className={styles.welcomeBack}>welcome back,</p>
                  <p className={styles.user}>
                    <b>User</b>
                  </p>
                </h1>
                <div className={styles.buttonParent}>
                  <Button
                    vuesaxlinearcircle="/vuesaxlinearcircle.svg"
                    createNewClaim="create new claim"
                    page1="/page1.svg"
                  />
                  <Button
                    vuesaxlinearcircle="/vuesaxlinearcircle.svg"
                    createNewClaim="report lost item"
                    page1="/magnifyingglasssvgrepocom-2-1.svg"
                  />
                </div>
              </div>
              <div className={styles.claimListContainerWrapper}>
                <div className={styles.claimListContainer}>
                  <div className={styles.frameContainer}>
                    <div className={styles.currentClaimsWrapper}>
                      <h1 className={styles.currentClaims}>current claims</h1>
                    </div>
                    <div className={styles.claimsDivider} />
                  </div>
                  <div className={styles.claimDetailsContainerParent}>
                    <div className={styles.claimDetailsContainer}>
                      <h1 className={styles.airpods}>
                        <p className={styles.airpods1}>AirPods</p>
                      </h1>
                      <h3 className={styles.smithHall}>Smith Hall | Apr. 27</h3>
                      <div className={styles.fbf474d5f22}>4fbf474d5f22</div>
                    </div>
                    <div className={styles.claimDivider}>
                      <div className={styles.itemDivider} />
                    </div>
                    <h1 className={styles.bearcatCard}>Bearcat Card</h1>
                    <div className={styles.itemDetails}>
                      <h3 className={styles.baldwinHall}>Baldwin Hall | May 2</h3>
                      <div className={styles.cfb807629ad6}>cfb807629ad6</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.adminContainer}>
                <div className={styles.adminHeader}>
                  <div className={styles.adminTitle}>
                    <h2 className={styles.admin}>admin</h2>
                  </div>
                  <div className={styles.adminDivider} />
                </div>
              </div>
              <div className={styles.messageContainerParent}>
                <div className={styles.messageContainer}>
                  <b className={styles.pm}>2:42 PM</b>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.frameInner} />
                    <h3 className={styles.thisIsAn}>this is an automated message</h3>
                  </div>
                  <div className={styles.pmWrapper}>
                    <b className={styles.pm1}>2:45 PM</b>
                  </div>
                  <div className={styles.messageElements}>
                    <textarea
                      className={styles.messageContent}
                      placeholder="this is an automated message"
                      rows={4}
                      cols={11}
                    />
                  </div>
                  <b className={styles.pm2}>2:50 PM</b>
                  <div className={styles.messageElements1}>
                    <div className={styles.frameDiv}>
                      <div className={styles.rectangleDiv} />
                      <h3 className={styles.thisIsAn1}>this is an automated message</h3>
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild1} />
                  <div className={styles.wrapperButton}>
                    <img className={styles.buttonIcon} alt="" src="/button-1.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.footerContainer}>
              <div className={styles.footerContainerChild} />
              <b className={styles.coreDumpersLimited}>© Core Dumpers Limited 2024</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
