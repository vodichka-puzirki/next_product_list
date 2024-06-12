import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import Provider from './StoreProvider';

import './globals.scss';
import { Loading, ErrorNotification } from '@/components';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Product List',
  description: 'An application where the user can put their products up for sale',
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={montserrat.className}>
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
