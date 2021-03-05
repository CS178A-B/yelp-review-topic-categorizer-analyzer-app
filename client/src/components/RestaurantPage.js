import React from 'react';
import ReviewCard from './ReviewCard.js'

import {
  EuiPage,
  EuiPageHeader,
  EuiButton,
  EuiPageContentBody,
  EuiPageBody,
  EuiFlexGrid,
} from '@elastic/eui';

export default ({ button = <></> }) => (
  <EuiPage paddingSize="none">
    <EuiPageBody>
      <EuiPageHeader
        iconType="logoElastic"
        pageTitle="Restaurant Title"
        rightSideItems={[button, <EuiButton>Yelp Page</EuiButton>]}
        paddingSize="l"
      />

      {/* TODO: add review cards */}
      <EuiPageContentBody paddingSize="l" style={{ paddingTop: 0 }}>
        <EuiFlexGrid columns={2}>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
        </EuiFlexGrid>
      </EuiPageContentBody>
    </EuiPageBody>
  </EuiPage>
);