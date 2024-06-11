import { Metadata } from 'next/types';

import { AuthForm } from '@/components';

import styles from './styles.module.scss';

export const metadata: Metadata = {
  title: 'Registration',
  description: 'Registration page',
};

const Register = () => {
  return (
    <div className={styles.register}>
      <AuthForm type="register" />
    </div>
  );
};

export default Register;
