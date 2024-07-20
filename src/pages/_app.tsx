'use client';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useClientSide from '../hooks/useClientSide';

import './global.css';

const publicPaths = ['/login', '/signup', '/supplier-auth']; // Add public paths here
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
      router.push('/login');
    }
  }, [router, isClient]);

  return <Component {...pageProps} />;
}