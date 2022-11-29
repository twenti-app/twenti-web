import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { Styles } from './Layout.styles';

import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Styles.Main>
        <Outlet />
      </Styles.Main>
      <Footer />
    </Fragment>
  );
};
