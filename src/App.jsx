/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { Fragment } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

/* STYLESHEETS */
import 'assets/stylesheets/variables.css';
import 'assets/stylesheets/index.css';

/* COMPONENTS */
import Navbar from 'components/navbar';

/* ROUTES */
import Routes from 'routes/index.json';

const App = () => (
  <Fragment>
    <Navbar />
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        {
          Routes.map(route => (
            <Route
              key={`route${route.path}`}
              exact={route.exact}
              path={route.path}
              component={require(`./routes${route.component}`).default}
            />
          ))
        }
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </Fragment>
);

export default App;
