import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import "./page-person.css"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


export default class PagePerson extends Component {
    swapiService = new SwapiService();

    state = {
        arrPerson: []
    }
        componentDidMount() {
        this.swapiService
        .getPerson(this.props.match.params.id)
        .then((person) => {
          this.setState({
            arrPerson: [person]
          });
        });
    }

    render() {
        console.log(this.state.arrPerson)
        console.log(this.props.history.goBack)
        return(
            <div>
            {this.state.arrPerson.map((el)=>{
                return  <div class="col-md-10">
                {/* <Link className="item" to={`/all`}>Назад</Link> */}
                <Link><span onClick={()=>this.props.history.goBack()}>Back</span></Link>
                <h2>{el.name}</h2>
                <div className="hero-details card">
                <img
                  className="person-image"
                  src={`${el.image.url}`}
                /> 
                <div className="card-body">
                <h4>
                {el.biography['full-name']}
                </h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <span className="term">Gender:</span>
                    <span>{el.appearance.gender}</span>
                  </li>
                  <li className="list-group-item">
                    <span className="term">Race:</span>
                    <span>{el.appearance.race}</span>
                  </li>
                  <li className="list-group-item">
                    <span className="term">Place of birth:</span>
                    <span>{el.biography["place-of-birth"]}</span>
                  </li>
                  <li className="list-group-item">
                    <span className="term">Type:</span>
                    <span>{el.biography.alignment}</span>
                  </li>
                  <li className="list-group-item">
                    <span className="term">Group-affiliation:</span>
                    <span>{el.connections['group-affiliation']}</span>
                  </li>
                  <li className="list-group-item">
                    <span className="term">Relatives:</span>
                    <span>{el.connections.relatives}</span>
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
                </div>
        )
    }
}