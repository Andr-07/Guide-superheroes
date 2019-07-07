
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import History from "../history";
import Main from "../main";

import './app.css';
import AllHeroes from '../all-heroes';

export default class App extends Component {

    render() {

    
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
                <Route exact path="/" render={() => < Main />} />
                <Route exact path="/history" render={() => < History/>} />
                <Route exact path="/all" render={() => < AllHeroes/>} />
              </Switch>
    </Router>
    
  );
    }
};

