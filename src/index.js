import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Repositorie from './components/Repositorie';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/repositorie/:id' component={Repositorie} />
    </Switch>
  </Router>,

  document.getElementById('root')
);
