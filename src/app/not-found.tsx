import Link from 'next/link';
import { Metadata } from 'next/types';

import './globals.scss';

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'Not found page',
};

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <div>Oops !</div>
      <div>Page not Found :(</div>
      <div>
        Please, go to{' '}
        <Link className="not-found_link" href="/">
          home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
