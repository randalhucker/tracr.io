/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import Main from '../../components/main';
import styles from './admin-item-match.module.scss';
import { useRouter, useSearchParams } from 'next/navigation';
import useClientSide from '@/hooks/useClientSide';
import MatchFormComponent, { ReportItem } from '@/components/match-form-component';
import { useEffect, useState, Suspense } from 'react';
import { buildOneEntityUrl, EntityType, HttpMethod } from '@/helpers/api';
import { Report, Building, Item } from '@prisma/client';
import dynamic from 'next/dynamic';

// Test report
const initialReportData: ReportItem = {
  report: {
    id: 0,
    description: 'airpods',
    image: null,
    status: 'LOST',
    userId: 1,
    itemId: 1,
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now())
  },
  location: 'Swift Hall'
};

const ReportLoader: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const isClient = useClientSide();
  const [report, setReport] = useState<ReportItem>(initialReportData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isClient && id) {
      const fetchReportData = async () => {
        try {
          const response = await fetch(
            buildOneEntityUrl(HttpMethod.GET, EntityType.REPORT, parseInt(id))
          );
          const data: Report = await response.json();
          const itemResponse = await fetch(
            buildOneEntityUrl(HttpMethod.GET, EntityType.ITEM, data.itemId ?? 0)
          );
          const itemData: Item = await itemResponse.json();
          const item = {
            report: data,
            location: itemData.location
          };

          setReport(item);
        } catch (error) {
          console.error('Failed to fetch report data:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchReportData();
    } else {
      setLoading(false);
    }
  }, [id, isClient]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <MatchFormComponent reportItem={report} />;
};

// Dynamically import ReportLoader to ensure it’s only used on the client side
const DynamicReportLoader = dynamic(() => Promise.resolve(ReportLoader), {
  ssr: false
});

const AdminItemMatch: NextPage = () => {
  return (
    <div className={styles.adminItemMatch}>
      <div className={styles.wrapperGroup9}>
        <img className={styles.wrapperGroup9Child} alt="" src="/background.svg" />
      </div>
      <Main back="/back.svg" settings="/settings.svg" messages="/messages.svg" home="/home.svg" />
      <div className={styles.lostItemDetailsWrapper}>
        <Suspense fallback={<div>Loading...</div>}>
          <DynamicReportLoader />
        </Suspense>
      </div>
    </div>
  );
};

export default AdminItemMatch;
