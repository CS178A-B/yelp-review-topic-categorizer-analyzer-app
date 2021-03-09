import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { starsRender } from './Stars/StarsRender.js';
import ReviewCard from './ReviewCard.js'
import MapView from './MapView.js'
import { getRestaurant, getRestaurants } from '../actions/restaurants.js';

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

function RestaurantPage({ button = <></>, match }) {
  const dispatch = useDispatch();
  dispatch(getRestaurant(match.params.id));
  const restaurant = useSelector((state) => state.restaurant);
  // console.log(restaurant[0]);

  // if(restaurant[0] === undefined) {
  //   console.log(restaurant);
  // }
  // console.log(match.params.id);
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
)};

export default RestaurantPage;