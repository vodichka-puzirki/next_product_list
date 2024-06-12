'use client';
import Link from 'next/link';

import './globals.scss';

type ErrorPageProps = {
  error: Error;
};

const ErrorPage = ({ error }: ErrorPageProps) => {
  return (
    <div className="error">
      <div className="error-name">{error.name}</div>
      <div className="error-message">{error.message}</div>
      <div className="error-redirect">
        Go to{' '}
        <Link className="error-redirect_link" href="/">
          home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
