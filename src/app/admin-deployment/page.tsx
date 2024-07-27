/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import Main from '../../components/main';
import Footer from '../../components/footer';
import styles from './admin-deployment.module.scss';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import useClientSide from '@/hooks/useClientSide';
import { Building } from '@prisma/client';
import LocationList from '@/components/location-list-component';

// Test Buildings
const steger: Building = {
  id: 1,
  name: 'Steger Student Center',
  createdAt: new Date(),
  updatedAt: new Date()
};

const swift: Building = {
  id: 1,
  name: 'Swift Hall',
  createdAt: new Date(),
  updatedAt: new Date()
};

const test_building_list: Building[] = [steger, swift];

const AdminDeployment: NextPage = () => {
  const router = useRouter();
  const isClient = useClientSide();

  const [building_list, setBuildingList] = useState<Building[]>([]);

  const handleSaveClick = () => {
    console.log('Save button clicked');
    // API call to write changes to database (if not done on the add action)
  };

  const handleAddClick = () => {
    console.log('Add button clicked');
    // API call to create a new building
    // insert to building_list so it shows up on page (may need to refresh page?)
  }

  useEffect(() => {
    if (isClient) {
      // API call to get the buildings (set them to building list... yes the component expects a list of Buildings)
      
      setBuildingList(test_building_list);
    }
  } , [isClient]);

  return (
    <div className={styles.adminDeployment}>
      <div className={styles.wrapperGroup9}>
        <img className={styles.wrapperGroup9Child} alt="" src="/background.svg" />
      </div>
      <Main back="/back.svg" settings="/settings.svg" messages="/messages.svg" home="/home.svg" />
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
                <LocationList title="drop off locations" buildings={building_list} />
                <LocationList title="valid item locations" buildings={building_list} />
              </div>
              <div className={styles.actions}>
                <div className={styles.actionButtons}>
                  <div className={styles.saveAction} onClick={handleAddClick}>
                    <div className={styles.buttonParent}>
                      <img className={styles.buttonIcon} alt="" src="/button-11.svg" />
                      <b className={styles.saveLabel}>+</b>
                    </div>
                  </div>
                  <div className={styles.exitAction} onClick={handleAddClick}>
                    <img className={styles.buttonIcon1} alt="" src="/button-11.svg" />
                    <b className={styles.exitLabel}>+</b>
                  </div>
                </div>
              </div>
            </div>
            <Footer saveAndExit="save and exit" onSaveAndExit={handleSaveClick}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDeployment;
