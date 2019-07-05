import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";

import "./under-header.css";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

export default class UnderHeader extends Component {
  swapiService = new SwapiService();
 
  state = {
    loading: true,
  };

  render() {
      return (
        <div className="jumbotron-heroes jumbotron rounded">
        <div class="container-heroes"><img class="img-heroes" src="https://scontent.frix2-1.fna.fbcdn.net/v/t1.0-9/26815405_1568867069894682_3076911007103291951_n.jpg?_nc_cat=103&_nc_oc=AQkqNOc9oKf1bbP0oYfKd2w_YArTfWsn9gsPhOgK2H-gWBpuAjGYuIBNIdCjbuTGQcE&_nc_ht=scontent.frix2-1.fna&oh=78e10111207559318e0686f680d93300&oe=5D791FAC"></img>
        </div>
        </div>
      );
  }
}
