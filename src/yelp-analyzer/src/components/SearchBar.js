import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import RestaurantCard from './RestaurantCard';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      results: []
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.setState({query: e.target.query});

    axios
      .get('http://localhost:8082/api/reviews/'+this.state.query)
      .then(res => {
        this.setState({
          results: res.data,
        })
      })
      .catch(err => {
        console.log("Error in SearchBar!");
      })
  };
  
  
  render() {
    
    const restaurants = this.state.results;
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    let restaurantList;

    if(!restaurants) {
      restaurantList = "No restaurants found!";
    } else {
      restaurantList = restaurants.map((restaurant, k) =>
        <RestaurantCard restaurant={restaurant} key={k} />
      );
    }

    return (
      <div>
        <form noValidate onSubmit={this.onSubmit} class="form-inline">
            <input
              type="text"
              style={BarStyling}
              placeholder={"search restaurant, cuisine, or location"}
              name={"query"}
              value={this.state.query}
              onChange={this.onChange}
              class="form-control mr-sm-2 search-bar"
            />
            <button type="submit" name="searchButton" class="btn btn-danger my-2 my-sm-0"> 🔎 </button>
        </form>
        
      </div>
    );
  }
}
 
export default SearchBar;
