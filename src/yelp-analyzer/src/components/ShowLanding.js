// LANDING PAGE WITH SEARCH BAR

import React, { Component } from 'react';
import SearchBar from './SearchBar'
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
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <header class="masthead mb-auto">
    <div class="inner">
      <h3 class="masthead-brand">Cover</h3>
      <nav class="nav nav-masthead justify-content-center">
        <a class="nav-link active" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Contact</a>
      </nav>
    </div>
  </header>

  <main role="main" class="inner cover">
    <h1 class="cover-heading">Yelp Restaurant Review Categorizer & Analyzer</h1>
    <p class="lead">
      <SearchBar/>
    </p>
  </main>
</div>
    );
  }
}

export default ShowLanding;
