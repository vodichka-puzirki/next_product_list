import { Metadata } from 'next/types';

import { NotFound } from '@/components';

import './globals.scss';

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'Not found page',
};

const NotFoundPage = () => {
  return <NotFound />;
};

export default NotFoundPage;
