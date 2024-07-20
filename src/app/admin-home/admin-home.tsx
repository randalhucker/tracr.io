import type { NextPage } from 'next';
import FrameComponent1 from '../../components/frame-component1';
import styles from './admin-home.module.css';

const AdminHome: NextPage = () => {
  return (
    <div className={styles.adminHome}>
      <div className={styles.wrapperGroup9}>
        <img className={styles.wrapperGroup9Child} alt="" src="/group-22.svg" />
      </div>
      <FrameComponent1 />
      <div className={styles.welcomeContentWrapper}>
        <div className={styles.welcomeContent}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.welcomeBackAdminContainer}>
              <p className={styles.welcomeBack}>welcome back,</p>
              <p className={styles.admin}>
                <b>Admin</b>
              </p>
            </div>
            <div className={styles.managementButtons}>
              <button className={styles.button}>
                <img
                  className={styles.vuesaxlinearcircleIcon}
                  alt=""
                  src="/vuesaxlinearcircle.svg"
                />
                <b className={styles.manageLostItems}>manage lost items</b>
              </button>
              <div className={styles.deploymentReportsButtons}>
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
          <footer className={styles.footer}>
            <div className={styles.copyright}>
              <div className={styles.separator} />
              <b className={styles.coreDumpersLimited}>© Core Dumpers Limited 2024</b>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
