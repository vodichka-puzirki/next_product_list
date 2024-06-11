import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Loading, ErrorNotification } from '@/components';
import Provider from './StoreProvider';

import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Product List',
  description: 'An application where the user can put their products up for sale',
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
          <Loading />
          <ErrorNotification />
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
