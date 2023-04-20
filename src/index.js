import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Router } from 'react-router-dom';
import Login from './view/Login/Login';
import Home from './view/Home/Home';
import Help from './view/Help/Help';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>

      <Switch>
        <Route path='/login' component={ <Login/> }></Route>
        <Route path='/login' component={ <Home/> }></Route>
        <Route path='/login' component={ <Help/> }></Route>
      </Switch>

    </Router>

  </React.StrictMode>
);
