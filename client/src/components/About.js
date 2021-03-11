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
              this application, start by clicking 'Search Restaurants'. There, you can search up restaurants and receive
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
          <EuiTitle>
            <h3>About The Team</h3>
          </EuiTitle>
          <EuiSpacer />
          <EuiText>
            This application was created by Team Cool, a senior design team for CS 178B. The team consists of 4 members
            - Andrew Chen, Timothy Koo, Mina delos Santos and Giuseppi Pelayo. All 4 members are currently seniors,
            with Mina studying Computer Engineering while Andrew, Timothy and Giuseppi are studying Computer Science. We
            combined our love for food, curiosity, and shared problems with Yelp to create an application that provides
            easy-to-read scores based off different topics to easily narrow down dinning preferences.
          </EuiText>
          <EuiSpacer />
        </Fragment>
      ),
    },
  ];

  return (
    <EuiTabbedContent
      tabs={tabs}
      initialSelectedTab={tabs[0]}
      autoFocus="selected"
      onTabClick={(tab) => {
        console.log('clicked tab', tab);
      }}
    />
  );
};
