import { Metadata } from 'next/types';

import { Loading } from '@/components';

import './globals.scss';

export const metadata: Metadata = {
  title: 'Loading',
  description: 'App Loading',
};

const LoadingPage = () => {
  return (
    <>
      <Loading isLoading />;
    </>
  );
};

export default LoadingPage;
