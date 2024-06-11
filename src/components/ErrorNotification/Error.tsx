'use client';
import { useAppSelector } from '@/hooks';

import styles from './styles.module.scss';

const ErrorNotification = () => {
  const error = useAppSelector((state) => state.error.error);

  if (error.code === 0) {
    return <></>;
  }

  console.log(error);
  return (
    <div className={styles.error}>
      <div>{error.code}</div>
      <div>{error.message}</div>
    </div>
  );
};

export default ErrorNotification;
