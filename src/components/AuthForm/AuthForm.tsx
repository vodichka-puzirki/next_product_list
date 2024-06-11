'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';

import { useLogin, useRegister } from '@/hooks';
import { INITIAL_EMAIL, INITIAL_PASSWORD } from '@/constans/AuthForm';

import styles from './styles.module.scss';

type AuthFormProps = {
  type: 'login' | 'register';
};

const AuthForm = ({ type }: AuthFormProps) => {
  const [email, setEmail] = useState(INITIAL_EMAIL);
  const [password, setPassword] = useState(INITIAL_PASSWORD);
  const { register } = useRegister();
  const { login } = useLogin();
  const router = useRouter();

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let data;
    if (type === 'login') {
      data = await login({ email, password });
    } else {
      data = await register({ email, password });
    }

    if (!data.error) router.push('/');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.title}>{type === 'login' ? 'Login' : 'Registration'}</div>
      <label className={styles.formLabel} htmlFor="login">
        <input
          className={`${styles.formInput} ${email.length > 0 ? `${styles.active}` : ''}`}
          value={email}
          onChange={handleEmail}
          id="login"
          type="text"
          required
        />
        <span className={styles.formPlaceholder}>Login</span>
      </label>
      <label className={styles.formLabel} htmlFor="password">
        <input
          className={`${styles.formInput} ${password.length > 0 ? `${styles.active}` : ''}`}
          type="text"
          id="password"
          value={password}
          onChange={handlePassword}
          required
        />
        <span className={styles.formPlaceholder}>Password</span>
      </label>
      <button className={styles.formBtn} type="submit">
        {type === 'login' ? 'sign in' : 'sign up'}
      </button>
      <div className={styles.formRedirect}>
        {type === 'login' ? (
          <>
            Not registered ? Go to{' '}
            <Link className={styles.redirectLink} href="./register">
              registration page
            </Link>
          </>
        ) : (
          <>
            Already registered ? Go to{' '}
            <Link className={styles.redirectLink} href="./login">
              login page
            </Link>
          </>
        )}
      </div>
    </form>
  );
};

export default AuthForm;
