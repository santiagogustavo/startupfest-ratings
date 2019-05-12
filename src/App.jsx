/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { Fragment } from 'react';
import {
  Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

/* STYLESHEETS */
import 'assets/stylesheets/variables.css';
import 'assets/stylesheets/index.css';

/* COMPONENTS */
import Navbar from 'components/navbar';

/* ROUTES */
import Routes from 'routes/index.json';

/* UTILS */
import client from 'utils/client';
import history from 'utils/history';

const App = () => (
  <Fragment>
    <Navbar />
    <ApolloProvider client={client}>
      <Router basename={process.env.PUBLIC_URL} history={history}>
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
      </Router>
    </ApolloProvider>
  </Fragment>
);

export default App;
