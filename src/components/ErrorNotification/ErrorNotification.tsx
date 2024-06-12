'use client';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

import { clearErrorAction } from '@/store';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks';

import styles from './styles.module.scss';

const ErrorNotification = () => {
  const error = useAppSelector((store) => store.error.error);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const timeoutClickRef = useRef<null | NodeJS.Timeout>(null);
  const timeoutRef = useRef<null | NodeJS.Timeout>(null);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    timeoutClickRef.current = setTimeout(() => dispatch(clearErrorAction()), 250);
    setIsErrorOpen(false);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    if (error.code !== 0) {
      setIsErrorOpen(true);
      timeoutRef.current = setTimeout(() => handleClose(), 5000);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (timeoutClickRef.current) clearTimeout(timeoutClickRef.current);
    };
  }, [error.code]);

  return (
    <div className={`${styles.error} ${isErrorOpen ? styles.active : ''}`}>
      <div>{error.code}</div>
      <div>{error.message}</div>
      <button className={styles.errorClose} type="button" onClick={handleClose}>
        <Image src="/close.svg" width={15} height={15} alt="close icon" />
      </button>
    </div>
  );
};

export default ErrorNotification;
