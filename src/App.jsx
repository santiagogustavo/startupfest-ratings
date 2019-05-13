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
import Root from 'routes/root';
import Results from 'routes/results';
import Startup from 'routes/startup';

/* UTILS */
import client from 'utils/client';
import history from 'utils/history';

const App = () => (
  <Fragment>
    <Navbar />
    <ApolloProvider client={client}>
      <Router basename={process.env.PUBLIC_URL} history={history}>
        <Switch>
          <Route exact path="/" component={Root} />
          <Route exact path="/results" component={Results} />
          <Route path="/startup" component={Startup} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </ApolloProvider>
  </Fragment>
);

export default App;
