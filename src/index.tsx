import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import indexRouter from './router';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {indexRouter.map((prop) => {
        return (
          <Route key={prop.path} path={prop.path} component={prop.component} />
        );
      })}
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);
reportWebVitals();
