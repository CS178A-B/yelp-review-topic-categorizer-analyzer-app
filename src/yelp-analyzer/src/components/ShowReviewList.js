import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReviewCard from './ReviewCard';

class ShowReviewList extends Component {
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
        console.log('Error from ShowReviewList');
      })
  };


  render() {
    const reviews = this.state.reviews;
    console.log("PrintReview: " + reviews);
    let reviewList;

    if(!reviews) {
      reviewList = "there is no review record!";
    } else {
      reviewList = reviews.map((review, k) =>
        <ReviewCard review={review} key={k} />
      );
    }

    return (
      <div className="ShowReviewList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Reviews List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-review" className="btn btn-outline-warning float-right">
                + Add New Review
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {reviewList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowReviewList;