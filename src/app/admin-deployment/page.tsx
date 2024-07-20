import type { NextPage } from 'next';
import FrameComponent from '../../components/frame-component2';
import Footer from '../../components/footer';
import styles from './admin-deployment.module.scss';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';
// import useClientSide from '@/hooks/useClientSide';

const AdminDeployment: NextPage = () => {
  // const router = useRouter();
  // const isClient = useClientSide();

  return (
    <div className={styles.adminDeployment}>
      <div className={styles.wrapperGroup9}>
        <img className={styles.wrapperGroup9Child} alt="" src="/group-9.svg" />
      </div>
      <FrameComponent group8="/group-82.svg" button="/button2.svg" />
      <div className={styles.itemContentWrapper}>
        <div className={styles.itemContent}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.itemHeader}>
              <h3 className={styles.universityOfCincinnatiContainer}>
                <span>{`University of Cincinnati `}</span>
                <span className={styles.tracrioDeployment}>| tracr.io deployment</span>
              </h3>
            </div>
            <div className={styles.itemLocation}>
              <div className={styles.itemDropdown}>
                <div className={styles.dropdownLabel}>
                  <h3 className={styles.dropOffLocations}>drop off locations</h3>
                  <div className={styles.dropdownOptions}>
                    <div className={styles.stegerOption}>
                      <div className={styles.stegerStudentCenter}>Steger Student Center</div>
                      <div className={styles.stegerStudentCenter1}>Steger Student Center</div>
                      <div className={styles.stegerStudentCenter2}>Steger Student Center</div>
                      <div className={styles.stegerStudentCenter3}>Steger Student Center</div>
                    </div>
                  </div>
                </div>
                <div className={styles.buildingOptions}>
                  <div className={styles.validItemLocation}>
                    <h3 className={styles.validItemLocations}>valid item locations</h3>
                  </div>
                  <div className={styles.smithLocation}>
                    <div className={styles.smithHall}>Smith Hall</div>
                  </div>
                  <div className={styles.buildingValues}>
                    <div className={styles.braunsteinHall}>Braunstein Hall</div>
                  </div>
                  <div className={styles.buildingValues1}>
                    <div className={styles.baldwinHall}>Baldwin Hall</div>
                  </div>
                  <div className={styles.buildingValues2}>
                    <div className={styles.frenchHall}>French Hall</div>
                  </div>
                </div>
              </div>
              <div className={styles.actions}>
                <div className={styles.actionButtons}>
                  <div className={styles.saveAction}>
                    <div className={styles.buttonParent}>
                      <img className={styles.buttonIcon} alt="" src="/button-11.svg" />
                      <b className={styles.saveLabel}>+</b>
                    </div>
                  </div>
                  <div className={styles.exitAction}>
                    <img className={styles.buttonIcon1} alt="" src="/button-11.svg" />
                    <b className={styles.exitLabel}>+</b>
                  </div>
                </div>
              </div>
            </div>
            <Footer vuesaxlinearcircle="/vuesaxlinearcircle.svg" saveAndExit="save and exit" />
          </div>
          <div className={styles.copyright}>
            <div className={styles.copyrightContent}>
              <div className={styles.backgroundShape} />
              <b className={styles.coreDumpersLimited}>© Core Dumpers Limited 2024</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDeployment;
