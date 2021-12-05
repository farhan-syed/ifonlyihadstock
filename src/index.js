import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import Corp from './Components/CorporateInfo'

ReactDOM.render(
  <Router>
  <React.StrictMode>
    <Switch>
      <Route path='/' exact component={App}/>
      <Route path='/ticker/:ticker' component={Corp} />
    </Switch>
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

