import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Repository from './components/Repository';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/repository/:id' component={Repository} />
    </Switch>
  </Router>,

  document.getElementById('root')
);
