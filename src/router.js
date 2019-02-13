import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import LoginPage from './routes/LoginPage';

function RouterConfig({ history }) {
  return (
    <Router history={history} >
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/menu" component={IndexPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
