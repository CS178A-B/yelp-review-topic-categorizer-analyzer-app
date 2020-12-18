// LANDING PAGE WITH SEARCH BAR

import React, { Component } from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import '../App.css';
import axios from 'axios';

class ShowLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/reviews')
      .then(res => {
        this.setState({
          reviews: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowLanding');
      })
  };

  render() {

    return (
      <div class = "landing">
      
        <NavBar/>

        <main role="main" className="">
          <h1 className="cover-heading">restaurant review topic categorizer & analyzer</h1>
          <SearchBar/>
        </main>
        
      </div>
    );
  }
}

export default ShowLanding;
