import React from "react";
import { starsRender } from './components/Stars/StarsRender.js';
import './ResultView.css'

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
