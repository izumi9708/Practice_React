import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Route1() {
  return <h1>Route 1</h1>;
}

function Route2() {
  return <h1>Route 2</h1>;
}

function Route3() {
  return <h1>Route 3</h1>;
}

export default function Plactice_5() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/route1">Route 1</Link>
          </li>
          <li>
            <Link to="/route2">Route 2</Link>
          </li>
          <li>
            <Link to="/route3">Route 3</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/route1" component={Route1} />
        <Route path="/route2" component={Route2} />
        <Route path="/route3" component={Route3} />
      </Switch>
    </Router>
  );
}
