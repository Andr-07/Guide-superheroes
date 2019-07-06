import React, { Component } from "react";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import './list-heroes.css'


let arr=[];

export default class ListHeroes extends Component {
    
    swapiService = new SwapiService();
    
    state = {
        arrNames:[]
    };

async componentDidMount() {
    for (let i = 0; i < 5; i++) {
      arr.push(Math.floor(Math.random()*220))
    }
    for (let i = 0; i < arr.length; i++) { 
        const res = await fetch(`https://www.superheroapi.com/api.php/2256007497815653/${arr[i]}`)
        const json = await res.json();
        console.log(json)
        this.setState({
            arrNames: [...this.state.arrNames,json]
        }) 
    }
}

    render() {
      return (
          <div>
            <div class="item-list list-group">
        {this.state.arrNames.map((el,i)=>{
            return <ul class="list-group-item" id={i}
             onClick={()=>this.props.onHeroSelected(el.id)}>{el.name}</ul>
        })}
  </div>
  </div>


      );
  }
}
