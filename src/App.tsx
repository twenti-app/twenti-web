import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalStyles } from 'Global.styles';

import { routes } from 'configuration/routes';

import { Layout } from 'ui/components/Layout';

import AccessRequest from 'ui/pages/AccessRequest';
import Landing from 'ui/pages/Landing';
import NotFound from 'ui/pages/NotFound';
import SignIn from 'ui/pages/SignIn';

export function App() {
  return (
    <Fragment>
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<Landing />} index={true} path={routes.LANDING} />
            <Route element={<AccessRequest />} path={routes.ACCESS_REQUEST} />
            <Route element={<SignIn />} path={routes.SIGN_IN} />
          </Route>
          <Route element={<NotFound />} path={routes.NOT_FOUND} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
