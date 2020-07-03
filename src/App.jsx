import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Menu from './pages/Menu';
import Products from './pages/Products';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Route exact path="/category/:title/:query" component={Products} />
        <Route exact path="/" component={Menu} />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default App;
