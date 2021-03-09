import React, { Fragment } from 'react';

import {
  EuiIcon,
  EuiTabbedContent,
  EuiTitle,
  EuiText,
  EuiSpacer,
} from '@elastic/eui';

export default () => {
  const tabs = [
    {
      id: 'about--id',
      name: 'How It Works',
      content: (
        <Fragment>
          <EuiTitle>
            <h3>How It Works</h3>
          </EuiTitle>
          <EuiSpacer />
          <EuiText>
              The Yelp Review Topic Categorizer and Analyzer comes up with an empyrical analysis of Yelp Reviews
              and helps you choose which restaurants to eat at based on scores of different topics and helps you choose which
              restaurants to eat at based on scores of different topics. To begin using
              this application, start by clicking 'Search' at the top. There, you can search up restaurants and receive
              results based off overall rating, food, ambience and service.
          </EuiText>
          <EuiSpacer />

        </Fragment>
      ),
    },
    {
      id: 'how_to--id',
      name: 'About The Team',
      content: (
        <Fragment>
          <EuiSpacer />
          <EuiTitle>
            <h3>About The Team</h3>
          </EuiTitle>
          <EuiText>
            blah blah blah
          </EuiText>
        </Fragment>
      ),
    },
  ];

  return (
    <EuiTabbedContent
      tabs={tabs}
      initialSelectedTab={tabs[1]}
      autoFocus="selected"
      onTabClick={(tab) => {
        console.log('clicked tab', tab);
      }}
    />
  );
};
