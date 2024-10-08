'use client';

import type { AppProps } from 'next/app';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useClientSide from '../hooks/useClientSide';

import './globals.css';

const publicPaths = ['/', '/register']; // Add public paths here
let userId: number | null = null;

export function setUserId(id: number) {
  userId = id;
}

export function getUserId() {
  return userId;
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isClient = useClientSide();

  useEffect(() => {
    if (isClient) {
      router.push('/');
    }
  }, [router, isClient]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Component {...pageProps} />
    </LocalizationProvider>
  );
}
