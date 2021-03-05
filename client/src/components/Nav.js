import React from 'react';

import {
  EuiBreadcrumbs,
  EuiButton,
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
  EuiSpacer,
} from '@elastic/eui';

const Nav = () => {
  const breadcrumbs = [
    {
      text: 'Home',
      href: '#',
      onClick: (e) => {
        e.preventDefault();
      },
    },
    {
      text: 'Search',
      href: '#',
      onClick: (e) => {
        e.preventDefault();
      },
    },
    {
      text: 'GitHub Repository',
      href: 'https://github.com/CS178A-B/final-project-cool-team',
      target: '_blank',
      onClick: (e) => {
        e.preventDefault();
      },
    }
  ];

  return (
    <EuiPageContent>
      <EuiBreadcrumbs
        breadcrumbs={breadcrumbs}
        truncate={false}
      />
      <EuiSpacer size="xs" />
      <EuiPageContentHeader>
        <EuiPageContentHeaderSection>
          <EuiTitle size="l">
            <h1>Yelp Review Topic Categorizer & Analyzer</h1>
          </EuiTitle>
        </EuiPageContentHeaderSection>
      </EuiPageContentHeader>
    </EuiPageContent>
  );
};

export default Nav;