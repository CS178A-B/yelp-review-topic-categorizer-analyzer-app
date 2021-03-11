import React, { Fragment } from 'react';

import {
  EuiIcon,
  EuiTabbedContent,
  EuiTitle,
  EuiText,
  EuiSpacer,
} from '@elastic/eui';

import './css/Pages.css';

export default () => {
  const tabs = [
    {
      id: 'about--id',
      name: 'How It Works',
      content: (
        <Fragment>
          <EuiSpacer/>
          <EuiText>
              The <span class="underline--magical">Yelp Review Topic Categorizer & Analyzer</span> is an app that uses machine learning technology to categorize and analyze the sentiments of Yelp Reviews to determine the strengths of a restaurant. The app comes up with an empirical analysis of Yelp Reviews
              to help you choose which restaurants to eat at, based on scores of different topics.
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
          <EuiSpacer/>
          <EuiText>
            Hey, we're <span class="underline--magical">Team Cool!</span> We're a team of 4 Computer Science students from UCR 
            - Andrew Chen, Timothy Koo, Mina delos Santos and Giuseppi Pelayo. Combining our love for food and computer science we wanted to help you choose the best restaurant to eat at, to make those those
            "Where do you want to eat?" moments easier.
          </EuiText>
          <EuiSpacer/>
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
