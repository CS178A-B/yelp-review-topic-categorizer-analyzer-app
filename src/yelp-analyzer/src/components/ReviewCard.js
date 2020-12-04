import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ReviewCard = (props) => {
    const  review  = props.review;

    return(
        <div className="card-container">
            <img src="https://commapress.co.uk/reviews/the-review-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-review/${review._id}`}>
                        { review.title }
                    </Link>
                </h2>
                <h3>{review.author}</h3>
                <p>{review.description}</p>
            </div>
        </div>
    )
};

export default ReviewCard;