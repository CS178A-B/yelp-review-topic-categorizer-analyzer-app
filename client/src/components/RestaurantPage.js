import React from 'react';

import {
    EuiPage,
    EuiPageContent,
    EuiPageContentBody,
    EuiPageHeader,
    EuiPageSideBar,
    EuiPageBody,
  } from '@elastic/eui';

import '@elastic/eui/dist/eui_theme_dark.css';

// const page_tabs = [
//     {
//       id: 'reviews',
//       name: 'Reviews',
//       disabled: false,
//     },
//     {
//       id: 'yelp_link',
//       name: 'Open on Yelp',
//       disabled: false,
//     //   TODO: put restaurant yelp link
//       href: 'https://www.elastic.co/',
//     },
//   ];

export default ({ button = <></>, content, sideNav }) => (
  <EuiPage paddingSize="none">
    <EuiPageSideBar sticky>{sideNav}</EuiPageSideBar>

    <EuiPageBody panelled>
      <EuiPageHeader
        restrictWidth
        iconType="logoElastic"
        pageTitle="Page title"  // TODO: put restaurant title here

        tabs={[ // TABS REFERENCE: https://elastic.github.io/eui/#/layout/page-header#tabs-in-the-page-header
            {
              id: 'reviews',
              label: 'Reviews', // TODO: put reviews here
              disabled: false,
            },
            {
              id: 'yelp_link',
              label: 'Open on Yelp',
              disabled: false,
              href: 'https://www.elastic.co/',  //   TODO: put restaurant yelp link
            },
          ]}
      />
      <EuiPageContent
        hasBorder={false}
        hasShadow={false}
        paddingSize="none"
        color="transparent"
        borderRadius="none">
        <EuiPageContentBody restrictWidth>{content}</EuiPageContentBody>
      </EuiPageContent>
    </EuiPageBody>
  </EuiPage>
);

