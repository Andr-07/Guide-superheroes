
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import History from "../history";


import './header.css';

const Header = () => {
  return (

      <Router>
    <div className="header d-flex">
      <p class="gradient-text">
      <Link className="item" to="/">ALL COMICS</Link>
      </p>
      <ul className="d-flex">
        <li>
      <Link className="item" to="/history">HISTORY</Link>
        </li>
        <li>
      <Link className="item" to="/all">ALL HEROES</Link>
        </li>
      </ul>
    </div>
    <Switch>
                <Route exact path="/history" render={() => < History/>} />
              </Switch>
    </Router>

  );
};

export default Header;