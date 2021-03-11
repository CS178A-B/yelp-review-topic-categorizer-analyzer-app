import React from 'react';
import { starsRender } from './Stars/StarsRender.js';

import {
    EuiFlexItem,
    EuiCard,
    EuiText,
  } from '@elastic/eui';

export default class ReviewCard extends React.Component {
    state = { showing: false };
    render() {
        const review = this.props.review;
        const { showing } = this.state;
        return (
            <EuiFlexItem>
                <EuiCard
                    textAlign="left"
                    title={"Overall Rating: " + review.stars + "/5"}
                >
                <EuiText size="s">
                    <ul>
                        <li>Overall: {starsRender(review.stars)}</li>
                        <li>Ambience: {starsRender(review.ambience)}</li>
                        <li>Service: {starsRender(review.service)}</li>
                        <li>Food: {starsRender(review.food)}</li>
                    </ul>
                    <ul>
                        {review.text.substr(0, 200)}
                        { showing 
                            ? <div>{review.text.substr(200, review.text.length)}</div>
                            : null
                        }
                        <button onClick={() => this.setState({ showing: !showing })}>[Show More]</button>
                    </ul> 
                    
                </EuiText>
            </EuiCard>
            {/* < Example /> */}
        </EuiFlexItem>
        );
    }
}