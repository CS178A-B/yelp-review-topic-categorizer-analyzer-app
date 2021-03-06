import React from "react";
import { StarFill, Star, StarHalf } from 'bootstrap-icons-react';
import './ResultView.css'

function starsRender(value) {
  value = +value

  if (value === 0.0) {
    return ( <span>Data Not Available</span> )
  } 
  else if (value === 1.0) {
    return ( <span><StarFill /><Star /><Star /><Star /><Star /></span> )
  }
  else if (value === 1.5) {
    return ( <span><StarFill /><StarHalf /><Star /><Star /><Star /></span> )
  }
  else if (value === 2.0) {
    return ( <span><StarFill /><StarFill /><Star /><Star /><Star /></span> )
  }
  else if (value === 2.5) {
    return ( <span><StarFill /><StarFill /><StarHalf /><Star /><Star /></span> )
  }
  else if (value === 3.0) {
    return ( <span><StarFill /><StarFill /><StarFill /><Star /><Star /></span> )
  }
  else if (value === 3.5) {
    return ( <span><StarFill /><StarFill /><StarFill /><StarHalf /><Star /></span> )
  }
  else if (value === 4.0) {
    return ( <span><StarFill /><StarFill /><StarFill /><StarFill /><Star /></span> )
  }
  else if (value === 4.5) {
    return ( <span><StarFill /><StarFill /><StarFill /><StarFill /><StarHalf /></span> )
  }
  else if (value === 5.0) {
    return ( <span><StarFill /><StarFill /><StarFill /><StarFill /><StarFill /></span> )
  }

}

export default ({ result }) => (
  <li className="sui-result">
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
);
