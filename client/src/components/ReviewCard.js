import React from 'react';
import { starsRender } from './Stars/StarsRender.js';

import {
    EuiFlexItem,
    EuiCard,
    EuiText,
  } from '@elastic/eui';

export default class ReviewCard extends React.Component {
    render() {
        const review = this.props.review;
        return (
            <EuiFlexItem>
                <EuiCard
                    textAlign="left"
                    title={"Overall Rating: " + review.stars}
                    description={"\"" + review.text + "\""}
                >
                <EuiText size="s">
                    <ul>
                        <li>Ambience: {starsRender(review.ambience)}</li>
                        <li>Service: {starsRender(review.service)}</li>
                        <li>Food: {starsRender(review.food)}</li>
                    </ul>
                </EuiText>
            </EuiCard>
        </EuiFlexItem>
        );
    }
}