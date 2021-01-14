import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';

class ShowRestaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/reviews')
      .then(res => {
        this.setState({
          restaurants: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowRestaurantList');
      })
  };


  render() {
    const restaurants = this.state.restaurants;
    console.log("PrintRestaurant: " + restaurants);
    let restaurantList;

    if(!restaurants) {
      restaurantList = "there is no restaurant record!";
    } else {
      restaurantList = restaurants.map((restaurant, k) =>
        <RestaurantCard restaurant={restaurant} key={k} />
      );
    }

    return (
      <div className="ShowRestaurantList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Restaurants List</h2>
            </div>

          </div>

          <div className="list">
                {restaurantList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowRestaurantList;