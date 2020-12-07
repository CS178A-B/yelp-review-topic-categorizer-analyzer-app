// LANDING PAGE WITH SEARCH BAR

import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class ShowSearchLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      searchValue: '',
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

//   WRITE SEARCH HANDLER
searchOnChange = (event) => {
    console.log("Search handler triggered", event.target.value);
    this.setState({
        searchValue: event.target.value
    })
}

  render() {

    return (
      <div className="ShowSearchLanding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Search</h2>
            </div>

            <div>
              {/* ADD SEARCH BAR AND BUTTON */}
              <input type="text" value={this.props.searchValue} onChange={this.props.searchOnChange}/>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default ShowSearchLanding;