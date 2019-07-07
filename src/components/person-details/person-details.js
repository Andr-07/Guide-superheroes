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

  onHeroesLoaded = (person) => {
    this.setState({ 
      person,
      loading: false
     });
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }
    this.swapiService.getPerson(personId)
    .then(this.onHeroesLoaded)
  }

  render() {
    console.log('>>>>',this.state.person)
    if (!this.state.person) {
      return <span> Select a person from a list</span>;
    }
     const { name, image:{ url }, appearance: {gender}, biography:
      {publisher, alignment} } = this.state.person;
    if (this.state.loading){
      return <div className="person-details card">
      <Spinner />
      </div>
    }

    return (
      <div className="person-details card">
        <img
          className="person-image"
          src={`${url}`}
        />

        <div className="card-body">
          <h4>
            {name}
          </h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender:</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Type:</span>
              <span>{alignment}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Publisher:</span>
              <span>{publisher}</span>
            </li>
            <li className="list-group-item">
              <span className="term">First appearance:</span>
              <span>{this.state.person.biography['first-appearance']}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}