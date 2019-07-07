import React, { Component } from "react";

import "./all-heroes.css";
export default class AllHeroes extends Component {
  render() {
    return (
      <div class="container h-100">
        <div class="d-flex justify-content-center h-100">
          <div class="searchbar">
            <input
              class="search_input"
              type="text"
              name=""
              placeholder="Search..."
            />
            <a href="#" class="search_icon">
              <i class="fas fa-search" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
