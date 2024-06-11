import { Metadata } from 'next/types';

import { AuthForm } from '@/components';

import styles from './styles.module.scss';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login page',
};

const Login = () => {
  return (
    <div className={styles.login}>
      <AuthForm type="login" />
    </div>
  );
};

export default Login;
