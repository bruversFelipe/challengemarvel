import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import routes from './routes';
import MasterLayout from '../Components/MasterLayout';
import Loading from '../Components/Loading';

function RenderRoutes(route) {
  const { Component, path, exact, title } = route;

  const renderComponent = (props) => (
    <MasterLayout title={title}>
      <React.Suspense fallback={<Loading loading />}>
        <Component {...props} routes={route.routes} />
      </React.Suspense>
    </MasterLayout>
  );

  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        renderComponent(props)
      }
    />
  );
}

function ConfigureRoute() {
  return (
    <Router>
      {routes.map((route) => (
        <RenderRoutes key={route.key} {...route} />
      ))}
    </Router>
  );
}

export { RenderRoutes };
export default ConfigureRoute;
