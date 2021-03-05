import React from 'react';

import {
    EuiFlexItem,
    EuiCard,
  } from '@elastic/eui';

const ReviewCard = () => {
    return (
        <EuiFlexItem>
        <EuiCard
            layout="horizontal"
            title={'Review Date.'}
            description="Review text."
            onClick={() => {}}
            href="#"
            />
    </EuiFlexItem>
    );
}

export default ReviewCard;