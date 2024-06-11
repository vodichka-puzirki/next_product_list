import Link from 'next/link';

import styles from './styles.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div>Oops !</div>
      <div>Page not Found :(</div>
      <div>
        Please, go to{' '}
        <Link className={styles.notFoundLink} href="/home">
          home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
