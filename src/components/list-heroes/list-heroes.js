import React, { Component } from "react";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import "./list-heroes.css";

let arr = [];
let arrRnd = [];
let arrTop = [];

export default class ListHeroes extends Component {
  swapiService = new SwapiService();

  state = {
    arrNames: [],
    topHeroes: [69, 346, 620, 644, 149],
    loading: true
  };

  async componentDidMount() {
    this.topHeroes();
  }

  topHeroes = async () => {
    const { topHeroes } = this.state;
    for (let i = 0; i < topHeroes.length; i++) {
      const res = await fetch(
        `https://www.superheroapi.com/api.php/2256007497815653/${topHeroes[i]}`
      );
      const json = await res.json();
      if (arrTop.length < 5) {
        arrTop.push(json);
      }
    }
    this.setState({
      arrNames: arrTop,
      loading: false

    });
  };

  randomHeroes = async () => {
    for (let i = 0; i < 5; i++) {
      arr.push(Math.floor(Math.random() * 730) + 1);
    }
    for (let i = 0; i < arr.length; i++) {
      const res = await fetch(
        `https://www.superheroapi.com/api.php/2256007497815653/${arr[i]}`
      );
      const json = await res.json();
      arrRnd.push(json);
    }
    this.setState({
      arrNames: arrRnd,
    });
    arr = arr.slice(5);
    arrRnd = arrRnd.slice(5);
  };

  render() {
    return (
      <div>
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
        {!this.state.loading ?
        <div class="item-list list-group">
          {this.state.arrNames.map((el, i) => {
            return (
              <ul
                class="list-group-item"
                id={i}
                onClick={() => this.props.onHeroSelected(el.id)}
              >
                {el.name}
              </ul>
            );
          })}
        </div> : 
        <div class="item-list list-group">
        <Spinner />
        </div>
        }
      </div>
    );
  }
}
