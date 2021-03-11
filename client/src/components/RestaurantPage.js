import React from 'react';
import { starsRender } from './Stars/StarsRender.js';
import GoogleMapReact from 'google-map-react';
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

const WIDTH = 20;
const HEIGHT = 20;

var restaurant_name;

const markerStyle = {
  position: 'absolute',
  borderRadius: '50%',
  border: '5px solid #c41200',
  backgroundColor: 'white',
  width: WIDTH,
  height: HEIGHT,
  left: -WIDTH / 2,
  top: -HEIGHT / 2, 
};

const textStyle = {
    paddingLeft: WIDTH,
    whiteSpace: 'nowrap',
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '1.2em',
}

const Marker = () => <div style={markerStyle}><div style={textStyle}>{restaurant_name}</div></div>;

function undefinedHandler(value) {
  console.log(value)
  if (typeof(value) == "undefined") {
    return 0.0
  }
  return value
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

    static defaultProps = {
      zoom: 10,
    } 

  render() {
    // This needs to be fixed
    const button = <></>;
    // This contains the restaurant info based on the restaurant's id
    const restaurant = this.state.restaurant;
    restaurant_name = restaurant.name
    // This contains the restaurant's reviews (in array format) based on the restaurant's id
    const reviews = this.state.reviews;

    let reviewList = [];
    reviews.forEach((item)=>{
      reviewList.push(<ReviewCard key={item.id} review={item} />);

    });

    return (
      <div>
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
        <div style={{ height: '60vh', width: '100%', padding: '3%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.MAPS_API }}
          defaultZoom={this.props.zoom}
          center={[undefinedHandler(restaurant.latitude), undefinedHandler(restaurant.longitude)]}
        >
          <Marker
            lat={undefinedHandler(restaurant.latitude)}
            lng={undefinedHandler(restaurant.longitude)}
          />
        </GoogleMapReact>
      </div>
      </div>

    );
  }
};