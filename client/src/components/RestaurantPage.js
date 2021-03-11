import React from 'react';
import { starsRender } from './Stars/StarsRender.js';
import ReviewCard from './ReviewCard.js';
import MapView from './MapView.js';
import './css/Pages.css';

import {
  EuiPage,
  EuiPageHeader,
  EuiButton,
  EuiPageContentBody,
  EuiPageBody,
  EuiFlexGrid,
  EuiEmptyPrompt,
  EuiPageContent,
  EuiSpacer,
} from '@elastic/eui';

export default class RestaurantPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      restaurant: {},
      reviews: []
    }
  }

  componentDidMount() {
    fetch(`https://teamcool-yelp-analyzer.herokuapp.com/restaurant/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            restaurant: result[0]
          });
        }
      );
    fetch(`https://teamcool-yelp-analyzer.herokuapp.com/reviews/${this.props.match.params.id}`)
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

    let reviewList = [];
    reviews.forEach((item)=>{
      reviewList.push(<ReviewCard key={item.id} review={item} />);
      reviewList.push(<EuiSpacer/>);
    });
 
    function mapComponent() {
      console.log("it entered here")
      let mapComponent;
      if(restaurant.name === undefined) {
        mapComponent = <div><h1>Loading</h1></div>
      }
      else {
        mapComponent = <MapView name={restaurant.name} lat={restaurant.latitude} lng={restaurant.longitude} />
      }
      return mapComponent;
    } 

    return (
      <EuiPage paddingSize="none" class="app-body">

            <div class="landing-feature page-content">

              <EuiSpacer/>
              <EuiSpacer/>

                <EuiPageBody paddingSize="1">
                    <EuiPageContent
                    verticalPosition="center"
                    horizontalPosition="center"
                    paddingSize="none">

                        <div class="page-content">

                        <EuiEmptyPrompt
                            title={<h2><span class="underline--magical">{restaurant.name}</span></h2>}
                            titleSize="l"
                            body={
                            <React.Fragment>
                                <EuiPageHeader
                                  description={"Overall Rating: " + restaurant.stars}
                                  rightSideItems={[button, <EuiButton target={"_blank"} href={"https://www.yelp.com/biz/" + restaurant.business_id}>Yelp Page</EuiButton>]}
                                  paddingSize="l"
                                />
                                <EuiPageContentBody paddingSize="l" style={{ paddingTop: 0 }}>

                                  {mapComponent()}
                                  <EuiSpacer/>
                                  
                                  <EuiFlexGrid columns={2}>
                                    <div>
                                      {reviewList}
                                    </div>
                                  </EuiFlexGrid>
                        
                                  
                                </EuiPageContentBody>

                            </React.Fragment>
                            }
                        />
                    </div>
                    </EuiPageContent>
                </EuiPageBody>
            </div>

      </EuiPage>
    );
  }
};