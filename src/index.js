import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './view/Login/Login';
import Home from './view/Home/Home';
import Header from './layout/header/Header';
import CardLogin from './layout/CardLogin/CardLogin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>

      <div className='container d-flex flex-column min-vh-100'>

        <Header />

        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path='/cadastrar' exact component={CardLogin}/>

        </Switch>

      </div>

    </BrowserRouter>

  </React.StrictMode>
);
