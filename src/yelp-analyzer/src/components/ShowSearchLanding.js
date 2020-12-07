// LANDING PAGE WITH SEARCH BAR

import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class ShowSearchLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
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
        console.log('Error from ShowSearchLanding');
      })
  };


  render() {

    return (
      <div className="ShowSearchLanding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Search</h2>
            </div>

            <div className="col-md-11">
              
              <br />
              <br />
              <hr />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default ShowReviewList;