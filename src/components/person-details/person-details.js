import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

import "./person-details.css";

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.personId, prevProps.personId)
    if (this.props.personId!==prevProps.personId){
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }
    this.swapiService.getPerson(personId).then(person => {
      this.setState({ 
        person,
        loading: false
       });
    });
  }

  render() {
    // if (!this.state.person) {
    //   return <span> Select a person from a list</span>;
    // }
    // const { id, name, gender, birthYear, eyeColor } = this.state.person;
    // if (this.state.loading){
    //   return <div className="person-details card">
    //   <Spinner />
    //   </div>
    // }
    return (
      <div className="person-details card">
        <img
          className="person-image"
          src={`https://vokrug.tv/pic/news/c/0/3/d/c03d86df292bad71b58e8dcf341bd89d.jpg`}
        />

        <div className="card-body">
          <h4>
            Batman
          </h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span></span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span></span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span></span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}