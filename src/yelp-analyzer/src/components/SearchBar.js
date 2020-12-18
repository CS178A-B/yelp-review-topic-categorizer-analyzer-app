import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import RestaurantCard from './RestaurantCard';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      query: []
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      query: this.state.query
    };

    axios
      .get('http://localhost:8082/api/reviews/search', data)
      .then(res => {
        this.setState({
          query: res.data
        })
      })
      .catch(err => {
        console.log("Error in SearchBar!");
      })
  };
  
  render() {
    const restaurants = this.state.query;
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
        <form noValidate onSubmit={this.onSubmit}>
            <input
            type="text"
            style={BarStyling}
            placeholder={"search restaurant, cuisine, or location"}
            name={"searchInput"}
            value={this.state.title}
            onChange={this.onChange}
            />
            <button
              type="submit"
              name="searchButton"
            />
        </form>
        <div className="ShowReviewList">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <br />
                <h2 className="display-4 text-center">Restaurant List</h2>
              </div>

              <div className="col-md-11">
                {/* <Link to="/create-review" className="btn btn-outline-warning float-right">
                  + Add New Review
                </Link>
                <br />
                <br />
                <hr /> */}
              </div>

            </div>

            <div className="list">
                  {restaurantList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default SearchBar;
