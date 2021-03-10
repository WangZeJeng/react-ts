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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
