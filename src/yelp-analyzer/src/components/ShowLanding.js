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
        <main role="main" class="container">
          <div class="landing-components-main">
            <div class="landing-components">
              <h1 className="cover-heading" class="landing-heading">restaurant review <br/> topic categorizer & analyzer</h1>
              <br/>
              <SearchBar/>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default ShowLanding;
