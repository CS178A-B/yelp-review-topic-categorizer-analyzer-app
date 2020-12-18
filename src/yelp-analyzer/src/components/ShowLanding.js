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
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <header className="masthead mb-auto">
    <div className="inner">
      <h3 className="masthead-brand">Cover</h3>
      <nav className="nav nav-masthead justify-content-center">
        <a className="nav-link active" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Contact</a>
      </nav>
    </div>
  </header>

  <main role="main" className="inner cover">
    <h1 className="cover-heading">Yelp Restaurant Review Categorizer & Analyzer</h1>
    <p className="lead">
      <SearchBar/>
    </p>
  </main>
</div>
    );
  }
}

export default ShowLanding;
