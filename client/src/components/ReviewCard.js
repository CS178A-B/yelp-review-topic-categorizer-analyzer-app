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
            title={'Preview te...'}
            description="Ambience 5; Service 3; Other 4."
            onClick={() => {}}
            href="#"
            />
    </EuiFlexItem>
    );
}

export default ReviewCard;