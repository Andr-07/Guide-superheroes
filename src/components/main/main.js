import React, { Component } from "react";

import Header from "../header";
import UnderHeader from "../under-header";
import ListHeroes from "../list-heroes";
import PersonDetails from "../person-details";

import "./main.css";

export default class Main extends Component {
  state = {
    selectedPerson: 70,
    listPeople: [70, 346, 620, 644, 149],
    random: false
  };
  onePersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  randomHeroes() {
    this.setState({
      random: true
    })
  }

  render() {
    return (
      <div>
        {/* <Header /> */}
        <UnderHeader />
        <div className="row mb2">
          <div className="col-md-6">
            <ListHeroes onHeroSelected={this.onePersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
