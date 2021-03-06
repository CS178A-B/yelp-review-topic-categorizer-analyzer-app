import React, { useState, Fragment } from 'react';
import Landing from './Landing';
import Search from './Search';

import {
  EuiIcon,
  EuiTabbedContent,
  EuiSpacer,
  EuiTitle,
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
    // content: (
    //     // <React.Fragment>
    //     //     <Landing/>
    //     // </React.Fragment>
    // ),
    href: '/home',
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
    // content: (
    //     // <React.Fragment>
    //     //     <Search/>
    //     // </React.Fragment>
    // ),
    href: '/search',
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

        <br/>

        <EuiTitle size="l">
            <a href='/home'><span style={navTitleStyle}>Yelp Topic Review Categorizer & Analyzer</span></a>
        </EuiTitle>

        <br/>
        
        <EuiTabbedContent
        tabs={tabs}
        initialSelectedTab={tabs[1]}
        autoFocus="selected"
        onTabClick={(tab) => {
            console.log('Clicked tab', tab);
        }}
        />

    </React.Fragment>
  );
};

export default Nav;