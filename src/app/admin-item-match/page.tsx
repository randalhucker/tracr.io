/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import Main from '../../components/main';
import styles from './admin-item-match.module.scss';
import { useRouter } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';
import MatchFormComponent, { ReportData } from '@/components/match-form-component';
import { useEffect, useState } from 'react';

// Test report
const initialReportData: ReportData = {
  lat: '123.456',
  long: '456.789',
  date: new Date(Date.now()),
  description: 'test description',
  location: { id: 1, name: 'Smith Hall', createdAt: new Date(), updatedAt: new Date() },
  name: 'Airpods'
};

const AdminItemMatch: NextPage = () => {
  const router = useRouter();
  const isClient = useClientSide();

  const [report, setReport] = useState<ReportData>(initialReportData);

  useEffect(() => {
    // API Call to get the relevant report data to pass to the MatchForm Component (may need to put data in URL query if this isn't possible)
    // Currently, the way to get to this page is by clicking on a report from admin-lost-items. This page should then be loaded with the data of the report that was clicked on.
    setReport(initialReportData);
  }, [isClient]);

  const handleMatchClick = (matchNumber: number) => {
    console.log(`Match button ${matchNumber} clicked`);
    // Placeholder function for match action
  };

  return (
    <div className={styles.adminItemMatch}>
      <div className={styles.wrapperGroup9}>
        <img className={styles.wrapperGroup9Child} alt="" src="/background.svg" />
      </div>
      <Main back="/back.svg" settings="/settings.svg" messages="/messages.svg" home="/home.svg" />
      <div className={styles.lostItemDetailsWrapper}>
        <MatchFormComponent report={report} />
      </div>
    </div>
  );
};

export default AdminItemMatch;
