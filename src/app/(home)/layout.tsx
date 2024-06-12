import { Header } from '@/components';

type HomeLayoutProps = Readonly<{ children: React.ReactNode }>;

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HomeLayout;
