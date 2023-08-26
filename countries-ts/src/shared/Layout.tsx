import { NavigationBar } from '@/shared/index';
import { Container } from 'react-bootstrap';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <NavigationBar />
      <Container className='my-3'>{children}</Container>
    </>
  );
};

export default Layout;
