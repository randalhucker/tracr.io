/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import FrameComponent from '../../components/frame-component2';
import Footer from '../../components/footer';
import styles from './admin-system-config.module.scss';

const AdminSystemConfig: NextPage = () => {
  const handleGenerateReport = () => {
    // Placeholder function for generating a report
    console.log('Generate report clicked');
  };

  const handleOtherButtonClick = () => {
    // Placeholder function for other button actions
    console.log('Other button clicked');
  };

  return (
    <div className={styles.adminSystemConfig}>
      <div className={styles.wrapperGroup9}>
        <img className={styles.wrapperGroup9Child} alt="" src="/group-9.svg" />
      </div>
      <FrameComponent group8="/group-82.svg" button="/button2.svg" />
      <div className={styles.statsContainerWrapper}>
        <div className={styles.statsContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.uptime35Days14Hours25Parent}>
              <div className={styles.uptime35DaysContainer}>
                <b>{`uptime: `}</b>
                <span>35 days, 14 hours, 25 minutes</span>
              </div>
              <div className={styles.users234}>
                <b>{`users: `}</b>
                <span>234</span>
              </div>
              <div className={styles.otherStatContainer}>
                <div className={styles.otherStat234Container}>
                  <b>{`other stat: `}</b>
                  <span>234</span>
                </div>
              </div>
              <div className={styles.otherStatList}>
                <div className={styles.otherStat234Container1}>
                  <b>{`other stat: `}</b>
                  <span>234</span>
                </div>
                <div className={styles.otherStat234Container2}>
                  <b>{`other stat: `}</b>
                  <span>234</span>
                </div>
                <div className={styles.otherStat234Container3}>
                  <b>{`other stat: `}</b>
                  <span>234</span>
                </div>
                <div className={styles.otherStat234Container4}>
                  <b>{`other stat: `}</b>
                  <span>234</span>
                </div>
                <div className={styles.otherStat234Container5}>
                  <b>{`other stat: `}</b>
                  <span>234</span>
                </div>
              </div>
              <Footer
                vuesaxlinearcircle="/vuesaxlinearcircle.svg"
                saveAndExit="generate report"
                propWidth="unset"
                propAlignSelf="stretch"
                onSaveAndExit={handleGenerateReport}
              />
            </div>
            <div className={styles.otherStatPair}>
              <div className={styles.otherStat234Container6}>
                <b>{`other stat: `}</b>
                <span>234</span>
              </div>
              <div className={styles.otherStat234Container7}>
                <b>{`other stat: `}</b>
                <span>234</span>
              </div>
              <div className={styles.otherStatSingleContainer}>
                <div className={styles.otherStat234Container8}>
                  <b>{`other stat: `}</b>
                  <span>234</span>
                </div>
                <div className={styles.otherStatListExpanded}>
                  <div className={styles.otherStat234Container9}>
                    <b>{`other stat: `}</b>
                    <span>234</span>
                  </div>
                  <div className={styles.otherStat234Container10}>
                    <b>{`other stat: `}</b>
                    <span>234</span>
                  </div>
                  <div className={styles.otherStat234Container11}>
                    <b>{`other stat: `}</b>
                    <span>234</span>
                  </div>
                  <div className={styles.otherStat234Container12}>
                    <b>{`other stat: `}</b>
                    <span>234</span>
                  </div>
                  <div className={styles.otherStat234Container13}>
                    <b>{`other stat: `}</b>
                    <span>234</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.copyrightContainerWrapper}>
            <div className={styles.copyrightContainer}>
              <div className={styles.separator} />
              <b className={styles.coreDumpersLimited}>© Core Dumpers Limited 2024</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSystemConfig;
