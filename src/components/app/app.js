import React, { Component } from 'react';

import Header from '../header';
import UnderHeader from '../under-header';
import ListHeroes from '../list-heroes';
import PersonDetails from '../person-details';


import './app.css';

export default class App extends Component {
  state = {
    selectedPerson: 5
  }
  onePersonSelected = (id) =>{
    this.setState({
      selectedPerson: id
    })
  }
  render(){
  return (
    <div>
      <Header />
      <UnderHeader />
{/* <button>Random</button> */}
      <div className="row mb2">
        <div className="col-md-6">
      <ListHeroes />
        </div>
        <div className="col-md-6">
        <PersonDetails />
        </div>
      </div>
    </div>
  );
};
};

