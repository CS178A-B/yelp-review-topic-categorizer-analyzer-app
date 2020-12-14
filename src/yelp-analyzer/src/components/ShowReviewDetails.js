import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showReviewDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/reviews/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showReviewDetails-API-response: " + res.data);
        this.setState({
          review: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowReviewDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/reviews/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowReviewDetails_deleteClick");
      })
  };


  render() {

    const review = this.state.review;
    let ReviewItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ review.title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Author</td>
            <td>{ review.author }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>ISBN</td>
            <td>{ review.isbn }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Publisher</td>
            <td>{ review.publisher }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Published Date</td>
            <td>{ review.published_date }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{ review.description }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowReviewDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Review List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Review's Record</h1>
              <p className="lead text-center">
                  View Review's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { ReviewItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,review._id)}>Delete Review</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-review/${review._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Review
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Review</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Review</button> */}

        </div>
      </div>
    );
  }
}

export default showReviewDetails;