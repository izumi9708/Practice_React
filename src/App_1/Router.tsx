import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';

const Main = () => {
  return (
    <h1>Mainです。</h1>
  )
}

export default function Router(){
  return (
    <div>
      <BrowserRouter>
        <h1>Hello!</h1>
        <Link to="/">Main</Link><br/>
        <Link to="/About">Aboutへ</Link><br/>
        <Link to="/Contact">Contactへ</Link>

        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path="/About">
            <About/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}