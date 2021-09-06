import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from './history';

import Navbar from './components/Navbar';
import Form from './components/Form';
import Try from './components/Try';

const Root = () => {
  return (<div>    
    <Router history={createBrowserHistory}>
      <Navbar />
      <Route path="/" exact component={App} />
      <Route path="/contact" exact component={Form} />
      <Route path="/about" exact component={Try} />
    </Router>
  </div>)
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
