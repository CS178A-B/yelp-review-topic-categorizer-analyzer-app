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
    id: '',
    name: (
        <span>
          <EuiIcon type="home" />
          &nbsp;Home
        </span>
      ),
    // href: '/',
    target: '_self',
    disabled: false,
  },
  {
    id: 'search',
    name: (
        <span>
          <EuiIcon type="search" />
          &nbsp;Search
        </span>
      ),
    // href: '/search',
    target: '_self',
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
      <Link to={`/${tab.id}`}>
        <EuiTab
          {...(tab.href && { href: tab.href, target: '_self' })}
          onClick={() => onSelectedTabChanged(tab.id)}
          isSelected={tab.id === selectedTabId}
          disabled={tab.disabled}
          key={index}>
          {tab.name}  
        </EuiTab>
      </Link>
    ));
  };

return (
    <React.Fragment>

      <EuiTabs size="l">{renderTabs()}</EuiTabs>

    </React.Fragment>
  );
};

export default Nav;