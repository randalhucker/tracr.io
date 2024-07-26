/* eslint-disable @next/next/no-img-element */
'use client';
import type { NextPage } from 'next';
import Main from '../../components/main';
import styles from './admin-lost-items.module.scss';
import useClientSide from '@/hooks/useClientSide';
import { useEffect, useState } from 'react';
import { DisplayDetails } from '@/components/claim-details';
import { Claim, Item } from '@prisma/client';
import { buildOneEntityUrl, buildTwoEntityUrl, EntityType, HttpMethod } from '@/helpers/api';
import { jwtDecode } from 'jwt-decode';
import { DecodedToken } from '@/hooks/useRoleAuth';
import ClaimsList from '@/components/claims-list';
import { useRouter } from 'next/navigation';

const AdminLostItems: NextPage = () => {
  const router = useRouter();
  const isClient = useClientSide();

  const [unmatched_reports, setUnmatchedReports] = useState<DisplayDetails[]>([]);
  const [matched_reports, setMatchedReports] = useState<DisplayDetails[]>([]);

  const handleReportClick = () => {
    console.log('Report clicked');
    router.push('/admin-item-match');
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isClient) {
          const token = window.localStorage.getItem('token');
          if (token) {
            const decoded = jwtDecode<DecodedToken>(token);

            // TODO Modify the URL to fetch all REPORTS for all users (sorting does not need to change: unmatched are claims that are in progress, matched are claims that are resolved)
            const claimsResponse = await fetch(
              buildTwoEntityUrl(HttpMethod.GET, EntityType.USER, decoded.id, EntityType.CLAIM),
              {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                }
              }
            );

            claimsResponse.ok
              ? console.log('Claims fetched successfully')
              : console.log('Claims fetch failed');

            const fetchedClaims: Claim[] = await claimsResponse.json();
            const details: DisplayDetails[] = await Promise.all(
              fetchedClaims.map(async (claim) => {
                const itemResponse = await fetch(
                  buildOneEntityUrl(HttpMethod.GET, EntityType.ITEM, claim.itemId),
                  {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  }
                );

                if (!itemResponse.ok) {
                  throw new Error('Network response was not ok');
                }

                const itemData: Item = await itemResponse.json();

                return {
                  name: itemData.name,
                  location: itemData.location,
                  date: claim.createdAt.toISOString(),
                  status: claim.status
                };
              })
            );

            const unmatched = details.filter((claimDetails) => claimDetails.status !== 'FOUND');
            const matched = details.filter((claim) => claim.status === 'FOUND');

            setUnmatchedReports(unmatched);
            setMatchedReports(matched);
          }
        }
      } catch (error) {
        console.error('Error fetching claims:', error);
      }
    };

    fetchData();
  }, [isClient]);

  return (
    <div className={styles.adminLostItems}>
      <div className={styles.wrapperGroup9}>
        <img className={styles.wrapperGroup9Child} alt="" src="/background.svg" />
      </div>
      <Main back="/back.svg" settings="/settings.svg" messages="/messages.svg" home="/home.svg" />
      <ClaimsList title='lost items' left_header='unmatched' right_header='matched' left_claims={unmatched_reports} right_claims={matched_reports} onClick={handleReportClick}/>
    </div>
  );
};

export default AdminLostItems;