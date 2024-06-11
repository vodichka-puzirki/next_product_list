'use client';
import Image from 'next/image';

import { useAppSelector } from '@/hooks';

import styles from './styles.module.scss';

type LoadingProps = {
  isLoading?: boolean;
};

const Loading = ({ isLoading }: LoadingProps) => {
  const loading = useAppSelector((state) => state.loading.loading);

  if (loading || isLoading) {
    return (
      <div className={styles.loading}>
        <Image src="/loading.svg" width={100} height={100} alt="loading pic" />
      </div>
    );
  }

  return <></>;
};

export default Loading;
