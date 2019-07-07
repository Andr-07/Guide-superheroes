import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import "./all-heroes.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


export default class AllHeroes extends Component {
    swapiService = new SwapiService();

    state = {
        search: '',
        output: []
    }

    // componentDidMount() {
    //     this.swapiService
    //     .getPersonByName(this.state.search)
    //     .then((peopleList) => {
    //       this.setState({
    //         output: peopleList
    //       });
    //     });
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log(">>>>>>>>>>>", prevState.search)
        if ((this.state.search !== prevState.search) && (this.state.search.length>1)) {
            this.swapiService
            .getPersonByName(this.state.search)
            .then((peopleList) => {
              this.setState({
                output: peopleList.results
              });
            })
            .catch();
        }
      }

      updateItem() {
        if (!this.state.search) {
          return;
        }
    }

    onChangeFunc = (e) => {
        this.setState({
            search: e.target.value
        })
    }

  render()
  {  
console.log('+++++',this.state.output)
      return (
        <div>
      <div class="container h-100">
        <div class="d-flex justify-content-center h-100">
          <div class="searchbar">
            <input onChange={this.onChangeFunc}
              class="search_input"
              type="text"
              name=""
              placeholder="Search hero..."
            />
            <div class="search_icon">
              <i class="fas fa-search" />
            </div>
          </div>
        </div>
      </div>
      {this.state.output ? 
      <div class='row'>
      {this.state.output.map((el)=>{
          return  <div class="col-md-6">
 
          <div className="person-details card">
          <img
            className="person-image"
            src={`${el.image.url}`}
          /> 
          <div className="card-body">
          <h4>
          <Link className="item" to={`/hero/${el.id}`}>{el.name}</Link>
          </h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender:</span>
              <span>{el.appearance.gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Type:</span>
              <span>{el.biography.alignment}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Publisher:</span>
              <span>{el.biography.publisher}</span>
            </li>
            <li className="list-group-item">
              <span className="term">First appearance:</span>
              <span>{el.biography['first-appearance']}</span>
            </li>
          </ul>
          </div>
          </div>
          </div>
      })}
      </div> : 
            <div class='row'>
            <div class="col-md-6">
            <div className="person-details card">
            <h3>No results... Try again!</h3>
            </div>
            </div>
            </div>
      
       }
      </div>
    );
  }
}
