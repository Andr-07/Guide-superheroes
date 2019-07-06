import React, { Component } from "react";

import Header from "../header";
import UnderHeader from "../under-header";
import ListHeroes from "../list-heroes";
import PersonDetails from "../person-details";

import "./app.css";

export default class App extends Component {
  state = {
    selectedPerson: 69,
    listPeople: [69, 346, 620, 644, 149] 
  };
  onePersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  randomHeroes() {
    
  }

  render() {
    return (
      <div>
        <Header />
        <UnderHeader />
        <button
          className="top-heroes btn btn-danger btn-lg"
          onClick={this.topHeroes}
        >
          Top - 5
        </button>
        <button
          className="random-heroes btn btn-danger btn-lg"
          onClick={this.randomHeroes}
        >
          Random Heroes
        </button>
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
