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
      name: 'About',
      content: (
        <Fragment>
          <EuiSpacer />
          <EuiTitle>
            <h3>About</h3>
          </EuiTitle>
          <EuiText>
              The Yelp Review Topic Categorizer and Analyzer comes up with an empyrical analysis of Yelp Reviews
              and helps you choose which restaurants to eat at based on scores of different topics.
          </EuiText>
        </Fragment>
      ),
    },
    {
      id: 'how_to--id',
      name: 'How To',
      content: (
        <Fragment>
          <EuiSpacer />
          <EuiTitle>
            <h3>How to Use</h3>
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
