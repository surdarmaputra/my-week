import React, { ReactElement } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DashboardPage from 'components/pages/DashboardPage';

export default function Routes(): ReactElement {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>
      <Route path="/dashboard">
        <DashboardPage />
      </Route>
    </Switch>
  );
}
