import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Header } from './components/Header';

import { Styles } from './Layout.styles';

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
