import React from "react";
import { StarFill, Star, StarHalf } from 'react-bootstrap-icons';
import './StarsRender.css'

export function starsRender(value) {
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