import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Layout from './components/Layout';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Route exact path="/" component={Header} />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default App;
