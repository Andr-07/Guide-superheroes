
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Information from "../information";
import Main from "../main";
import PagePerson from "../page-person";

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
      <Link className="item" to="/information">INFORMATION</Link>
        </li>
        <li>
      <Link className="item" to="/all">ALL HEROES</Link>
        </li>
      </ul>
    </div>
    <Switch>     
                <Route exact path="/" render={() => < Main />} />
                <Route exact path="/information" render={() => < Information/>} />
                <Route exact path="/all" render={() => < AllHeroes/>} />
                <Route exact path="/hero/:id" render={(props) => <PagePerson {...props}/>} />
              </Switch>
    </Router>
    
  );
    }
};

