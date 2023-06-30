import * as React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import App_1 from './App_1';
import App_2 from './App_2';
import './App.css';


export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="head-flex">
          <div className="nav-item"><Link to="/">App_1</Link></div>
          <div className="nav-item"><Link to="/App_2">App_2</Link></div>
        </div>

        <Switch>
          <Route exact path="/">
            <App_1/>
          </Route>   
          
          <Route exact path="/App_2">
            <App_2/>
          </Route>   
        </Switch>
        
      </BrowserRouter>
    </React.Fragment>
  )
}
