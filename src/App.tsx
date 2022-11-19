import { Fragment, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'Global.styles';

import { routes } from 'configuration/routes';

import { Layout } from 'ui/components/Layout';

import NotFound from 'ui/pages/NotFound';
import SignIn from 'ui/pages/SignIn';
import SignUp from 'ui/pages/SignUp';

export function App() {
  return (
    <Fragment>
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<SignIn />} path={routes.SIGN_IN} />
            <Route element={<SignUp />} path={routes.ACCESS_REQUEST} />
            <Route element={<SignUp />} path={routes.SIGN_UP} />
          </Route>
          <Route element={<NotFound />} path={routes.NOT_FOUND} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
