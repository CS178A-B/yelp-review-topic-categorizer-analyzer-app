import React from "react";
import RestaurantPage from './RestaurantPage';
import { starsRender } from './Stars/StarsRender.js';
import './ResultView.css'
import { Link } from 'react-router-dom';


const ResultView = ({ result }) => (
  <React.Fragment>

  <li className="sui-result">
    
      <div className="sui-result__header">
      <Link to={`/restaurant/${result.business_id.raw}`}>
          <span
            className="sui-result__title"
            // Snippeted results contain search term highlights with html and are
            // 100% safe and santitized, so we dangerously set them here
            dangerouslySetInnerHTML={{ __html: result.name.snippet }}
          />
      </Link>
        
      </div>
    
    <div className="sui-result__body">
      <ul className="sui-result__details">
        <li>
          <span className="sui-result__key">Overall Rating</span>{" "}
          <span className="sui-result__value">{starsRender(result.stars.raw)}</span>
        </li>
        <li>
          <span className="sui-result__key">Food</span>{" "}
          <span className="sui-result__value">{starsRender(result.food.raw)}</span>
        </li>
        <li>
          <span className="sui-result__key">Ambience</span>{" "}
          <span className="sui-result__value">{starsRender(result.ambience.raw)}</span>
        </li>
        <li>
          <span className="sui-result__key">Service</span>{" "}
          <span className="sui-result__value">{starsRender(result.service.raw)}</span>
        </li>
      </ul>
    </div>
  </li>

  </React.Fragment>
);

export default ResultView;