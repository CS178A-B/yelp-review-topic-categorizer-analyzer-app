import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';

import {
  EuiIcon,
  EuiTabs,
  EuiTab,
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
    href: '/',
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

  const [selectedTabId, setSelectedTabId] = useState('cobalt');

  const onSelectedTabChanged = (id) => {
    setSelectedTabId(id);
  };

  const renderTabs = () => {
    return tabs.map((tab, index) => (
      <EuiTab
        {...(tab.href && { href: tab.href, target: '_self' })}
        onClick={() => onSelectedTabChanged(tab.id)}
        isSelected={tab.id === selectedTabId}
        disabled={tab.disabled}
        key={index}>
        {tab.name}
      </EuiTab>
    ));
  };

return (
    <React.Fragment>

        <EuiTitle size="l">
            <a href='/home'><span style={navTitleStyle}>Yelp Topic Review Categorizer & Analyzer</span></a>
        </EuiTitle>

      <EuiTabs size="l">{renderTabs()}</EuiTabs>

    </React.Fragment>
  );
};

export default Nav;