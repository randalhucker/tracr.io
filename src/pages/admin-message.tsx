import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import styles from "./admin-message.module.css";

const AdminMessage: NextPage = () => {
  return (
    <div className={styles.adminMessage}>
      <div className={styles.wrapperGroup9}>
        <img className={styles.wrapperGroup9Child} alt="" src="/group-9.svg" />
      </div>
      <FrameComponent group8="/group-83.svg" button="/button3.svg" />
      <div className={styles.welcomeContentWrapper}>
        <div className={styles.welcomeContent}>
          <div className={styles.welcomeMessage}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <h1 className={styles.welcomeBackAdminContainer}>
                <p className={styles.welcomeBack}>welcome back,</p>
                <p className={styles.admin}>
                  <b>Admin</b>
                </p>
              </h1>
              <div className={styles.managementButtons}>
                <button className={styles.button}>
                  <img
                    className={styles.vuesaxlinearcircleIcon}
                    alt=""
                    src="/vuesaxlinearcircle.svg"
                  />
                  <b className={styles.manageLostItems}>manage lost items</b>
                </button>
                <div className={styles.systemButtons}>
                  <button className={styles.button1}>
                    <img
                      className={styles.vuesaxlinearcircleIcon1}
                      alt=""
                      src="/vuesaxlinearcircle.svg"
                    />
                    <b className={styles.manageDeployment}>manage deployment</b>
                  </button>
                  <button className={styles.button2}>
                    <img
                      className={styles.vuesaxlinearcircleIcon2}
                      alt=""
                      src="/vuesaxlinearcircle.svg"
                    />
                    <b className={styles.systemReport}>system report</b>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.profileContent}>
                <div className={styles.profileDetails}>
                  <div className={styles.profileName}>
                    <h2 className={styles.randyH}>randy h.</h2>
                  </div>
                  <div className={styles.profileDetailsChild} />
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.pmParent}>
                  <b className={styles.pm}>2:42 PM</b>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.frameInner} />
                    <h3 className={styles.thisIsAn}>
                      this is an automated message
                    </h3>
                  </div>
                  <div className={styles.pmWrapper}>
                    <b className={styles.pm1}>2:45 PM</b>
                  </div>
                  <div className={styles.messageContent}>
                    <textarea
                      className={styles.messageDetails}
                      placeholder="this is an automated message"
                      rows={4}
                      cols={11}
                    />
                  </div>
                  <b className={styles.pm2}>2:50 PM</b>
                  <div className={styles.messageContent1}>
                    <div className={styles.frameDiv}>
                      <div className={styles.rectangleDiv} />
                      <h3 className={styles.thisIsAn1}>
                        this is an automated message
                      </h3>
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild1} />
                  <div className={styles.wrapperButton}>
                    <img
                      className={styles.buttonIcon}
                      alt=""
                      src="/button-12.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerContentWrapper}>
            <div className={styles.footerContent}>
              <div className={styles.footerContentChild} />
              <b className={styles.coreDumpersLimited}>
                © Core Dumpers Limited 2024
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMessage;
