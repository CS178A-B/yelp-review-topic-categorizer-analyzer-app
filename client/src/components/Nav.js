import React, { useState, Fragment } from 'react';
import Landing from './Landing';
import Search from './Search';

import {
  EuiIcon,
  EuiTabbedContent,
  EuiTitle,
  EuiText,
  EuiSpacer,
} from '@elastic/eui';

const tabs = [
  {
    id: 'homePage',
    name: (
        <span>
          <EuiIcon type="home" />
          &nbsp;Home
        </span>
      ),
    content: (
      <Landing/>
    ),
    // href: '/home',
    target: '_self',
    disabled: false,
  },
  {
    id: 'searchPage',
    name: (
        <span>
          <EuiIcon type="search" />
          &nbsp;Search
        </span>
      ),
    content: (
      <Search/>
    ),
    // href: '/search',
    target: '_self',
    disabled: false,
  },
  {
    id: 'projectPage',
    name: (
      <span>
        <EuiIcon type="logoGithub" />
        &nbsp;Project Repository
      </span>
    ),
    href: 'https://github.com/CS178A-B/final-project-cool-team',
    target: '_blank',
    disabled: false,
  },
];

const Nav = () => {

  const navTitleStyle = {
    paddingLeft: '15px',
  }

return (
    <React.Fragment>

        <EuiTitle size="l">
            <a href='/home'><span style={navTitleStyle}>Yelp Topic Review Categorizer & Analyzer</span></a>
        </EuiTitle>

        <EuiTabbedContent
          tabs={tabs}
          initialSelectedTab={tabs[1]}
          autoFocus="selected"
          onTabClick={(tab) => {
            console.log('clicked tab', tab);
          }}
        />

    </React.Fragment>
  );
};

export default Nav;