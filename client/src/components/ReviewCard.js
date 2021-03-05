import React from 'react';

import {
    EuiFlexItem,
    EuiCard,
    EuiText,
  } from '@elastic/eui';

// TODO: create and initialize Review object for each relevant review
const Review = {
    // _id: ObjectId("60415f9bc89bb1168876d80c"),
    business_id: "f5Pg89x-2xek78E9KHMhNg",
    user_id: "cbPvfbWie2_YSHULGcCc4g",
    stars: "4",
    text: "This the Third year in a row I've come up from Miami to stay in Rouses...",
    date: "8/6/13 15:10",
    ambience: "5",
    service: "0",
    food: "0",
}

const ReviewCard = () => {
    return (
        <EuiFlexItem>
            <EuiCard
                textAlign="left"
                title={"Overall Rating: " + Review.stars}
                description={"\"" + Review.text + "\""}
            >
            <EuiText size="s">
                <ul>
                    <li>Ambience: {Review.ambience}</li>
                    <li>Service: {Review.service}</li>
                    <li>Food: {Review.food}</li>
                </ul>
            </EuiText>
        </EuiCard>
    </EuiFlexItem>
    );
}

export default ReviewCard;