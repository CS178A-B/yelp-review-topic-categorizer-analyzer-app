import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const RestaurantCard = (props) => {
    const  restaurant  = props.restaurant;

    return(
        <div className="card-container">
            {/* <img src="https://commapress.co.uk/reviews/the-review-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" /> */}
            <div className="desc">
                <h3>{restaurant.name}</h3>
                <p>{restaurant.stars}</p>
            </div>
        </div>
    )
};

export default RestaurantCard;