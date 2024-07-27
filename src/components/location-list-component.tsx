/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import styles from '../app/admin-deployment/admin-deployment.module.scss';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useClientSide from '@/hooks/useClientSide';
import { Building } from '@prisma/client';


export type LocationListType = {
    className?: string;
    title: string
    buildings: Building[]
  };
  
  const LocationList: NextPage<LocationListType> = ({ className = '', title, buildings }) => {
  return (
    <div className={styles.buildingOptions}>
      <div className={styles.validItemLocation}>
        <h3 className={styles.validItemLocations}>{title}</h3>
      </div>
      <div className={styles.buildingsContainer}>
        {buildings.map((building, index) => (
        <div key={index} className={styles.buildingValues}>
          <div className={styles.building}>{building.name}</div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default LocationList;