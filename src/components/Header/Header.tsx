import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo.jpg" width={150} height={150} alt="logo pic" />
      </div>
      <div className={styles.navigation}>
        <Link href="/">Home</Link>
        <Link href="/my-products">My products</Link>
        <button className={styles.logout} type="button">
          log out
        </button>
      </div>
    </header>
  );
};

export default Header;
