import React from 'react';
import { starsRender } from './Stars/StarsRender.js';
import ReviewCard from './ReviewCard.js';
import MapView from './MapView.js';

import {
  EuiPage,
  EuiPageHeader,
  EuiButton,
  EuiPageContentBody,
  EuiPageBody,
  EuiFlexGrid,
} from '@elastic/eui';

// TODO: create and initialize Restaurant object according to clicked result
export const Restaurant = {
  longitude: -73.444889,
  latitude: 44.978459,
  name: "Pizza Plus",
  stars: "4.5",
  ambience: "5.0",
  food: "5.0",
  service: "0.0",
  business_id: "WCei-r9iAqxEIFX40zOebA",
}

export default class RestaurantPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      restaurant: {},
      reviews: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:5000/restaurant/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            restaurant: result[0]
          });
        }
      );
    fetch(`http://localhost:5000/reviews/${this.props.match.params.id}`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          reviews: result
        });
      }
    );
  }

  render() {
    // This needs to be fixed
    const button = <></>;
    // This contains the restaurant info based on the restaurant's id
    const restaurant = this.state.restaurant;
    // This contains the restaurant's reviews (in array format) based on the restaurant's id
    const reviews = this.state.reviews;
    console.log(restaurant);
    console.log(reviews);
    return (
      <EuiPage paddingSize="none">
        <EuiPageBody>
          <EuiPageHeader
            pageTitle={restaurant.name}
            description={"Overall Rating: " + restaurant.stars}
            rightSideItems={[button, <EuiButton target={"_blank"} href={"https://www.yelp.com/biz/" + restaurant.business_id}>Yelp Page</EuiButton>]}
            paddingSize="l"
          />
  
          {/* TODO: add review cards */}
          <EuiPageContentBody paddingSize="l" style={{ paddingTop: 0 }}>
            
            <EuiFlexGrid columns={2}>
              {/* <div>
                {reviews.map(review =>
                  <ReviewCard/>
                )}
              </div> */}
              <ReviewCard/>
              <ReviewCard/>
              <ReviewCard/>
              <ReviewCard/>
            </EuiFlexGrid>
  
            <MapView/>
  
          </EuiPageContentBody>
        </EuiPageBody>
      </EuiPage>
    );
  }
};