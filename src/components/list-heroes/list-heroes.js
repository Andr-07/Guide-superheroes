import React, { Component } from "react";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import './list-heroes.css'


let arr=[];

export default class ListHeroes extends Component {
    
    swapiService = new SwapiService();
    
    state = {
        arrNames:[],
        arrImg:[]
    };

//    componentDidMount() {
//         this.swapiService
//         .getRandomPeople()
//         .then((people)=>{
//             this.setState({
//                 arrNames:[...people]
//             })
//         })
//         .then(this.renderPeople())
//         .getPerson(this.state.arrNames.foreach((el)=>{el}))
//         .then((people)=>{
//             console.log(people)
//         })
//     }

async componentDidMount() {
    for (let i = 0; i < 5; i++) {
      arr.push(Math.floor(Math.random()*220))
    }
    for (let i = 0; i < arr.length; i++) { 
        const res = await fetch(`https://www.superheroapi.com/api.php/2256007497815653/${arr[i]}`)
        const json = await res.json();
        console.log(json)
        this.setState({
            arrNames: [...this.state.arrNames,json.name],
            arrImg: [...this.state.arrImg,json.image]
        }) 
    }
}

    
    
    
    render() {
      return (
            <div class="item-list list-group">
            {/* <div class="row">
    <div class="col"> */}
        {this.state.arrNames.map((el,i)=>{
            return <ul class="list-group-item" id={i}>{el}</ul>
        })}
    {/* </div>
    <div class="col">
    {this.state.arrImg.map((el,i)=>{
            return <ul><img class="smallPic" src={`${el.url}`}></img></ul>
        })}
    </div>
  </div> */}
  </div>

      );
  }
}
