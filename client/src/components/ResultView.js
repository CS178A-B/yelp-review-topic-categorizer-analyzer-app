import React from "react";
import RestaurantPage from './RestaurantPage';
import { starsRender } from './Stars/StarsRender.js';
import './css/ResultView.css'
import { Link } from 'react-router-dom';
import { imageLink } from './Image.js'


const ResultView = ({ result }) => (
  <React.Fragment>
  
  <li className="sui-result">
  <Link to={`/restaurant/${result.business_id.raw}`}>
    
      <div className="sui-result__header">
      
          <span
            className="sui-result__title"
            // Snippeted results contain search term highlights with html and are
            // 100% safe and santitized, so we dangerously set them here
            dangerouslySetInnerHTML={{ __html: result.name.snippet }}
          />
        
      </div>
    
    <div className="sui-result__body">
      <ul className="sui-result__details">
        {imageLink(result.image_url.raw)}
      </ul>
      <ul className="sui-result__details">
        <li>
        <span>Overall Rating: </span>
          <span className="sui-result__value">{starsRender(result.stars.raw)}</span>
        </li>
        <li>
        <span>Food: </span>
          <span className="sui-result__value">{starsRender(result.food.raw)}</span>
        </li>
        <li>
          <span>Ambience: </span>
          <span className="sui-result__value">{starsRender(result.ambience.raw)}</span>
        </li>
        <li>
        <span>Service: </span>
          <span className="sui-result__value">{starsRender(result.service.raw)}</span>
        </li>
      </ul>
    </div>
    </Link>
  </li>
  
  </React.Fragment>
);

export default ResultView;