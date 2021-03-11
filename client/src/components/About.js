import React, { Fragment } from 'react';

import {
  EuiIcon,
  EuiTabbedContent,
  EuiText,
  EuiSpacer,
  EuiButton,
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
              The <b>Yelp Review Topic Categorizer & Analyzer</b> is an app that uses machine learning technology to categorize and analyze the sentiments of Yelp Reviews to determine the strengths of a restaurant. The app comes up with an empirical analysis of Yelp Reviews
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
            Hey, we're <b>Team Cool!</b> We're a team of 4 Computer Science students from UCR--Andrew Chen, Timothy Koo, Mina delos Santos and Giuseppi Pelayo. Combining our love for food and computer science, we want to help you choose the best restaurant to eat at. We hope that our app makes those <em>"Where do you want to eat?"</em> moments easier.
          </EuiText>
          <EuiSpacer/>
        </Fragment>
      ),
    },
    {
      id: 'repo--id',
      name: 'Code',
      content: (
        <Fragment>
          <EuiSpacer/>
          <EuiText>
            Check out the project <b>GitHub Repository</b>, and give the app a try!
          </EuiText>
          <EuiSpacer/>
            <a href="https://github.com/CS178A-B/final-project-cool-team" target="_blank">
                <EuiButton size="s" color="primary" fill={false} iconType="logoGithub">
                  npm start
                </EuiButton>
            </a>
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
