import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css'
import * as ReactBootStrap from "react-bootstrap";
// import Search from './components/Search.js';

import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";

import {
    ErrorBoundary,
    Facet,
    SearchProvider,
    SearchBox,
    Results,
    PagingInfo,
    ResultsPerPage,
    Paging,
    Sorting,
    WithSearch
  } from "@elastic/react-search-ui";
import { Layout } from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";

import {
    buildAutocompleteQueryConfig,
    buildFacetConfigFromConfig,
    buildSearchOptionsFromConfig,
    buildSortOptionsFromConfig,
    getConfig,
    getFacetFields
} from "./config/config-helper";

import { getPosts } from './actions/posts';

const { hostIdentifier, searchKey, endpointBase, engineName } = getConfig();
const connector = new AppSearchAPIConnector({
searchKey,
engineName,
hostIdentifier,
endpointBase
});
const config = {
searchQuery: {
    facets: buildFacetConfigFromConfig(),
    ...buildSearchOptionsFromConfig()
},
autocompleteQuery: buildAutocompleteQueryConfig(),
apiConnector: connector,
alwaysSearchOnInitialLoad: true
};

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div>
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <ReactBootStrap.Navbar.Brand href="#home">Restaurant Reviews with Aspect Sentiment Analysis</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                    {/* <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Divider />
                        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
                    </ReactBootStrap.NavDropdown> */}
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav>
                    <ReactBootStrap.Nav.Link href="#deets">Features</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                        About
                    </ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
            <SearchProvider config={config}>
                <WithSearch mapContextToProps={({ wasSearched }) => ({ wasSearched })}>
                    {({ wasSearched }) => {
                    return (
                        <div className="App">
                        <ErrorBoundary>
                            <Layout
                            header={<SearchBox autocompleteSuggestions={true} />}
                            sideContent={
                                <div>
                                {wasSearched && (
                                    <Sorting
                                    label={"Sort by"}
                                    sortOptions={buildSortOptionsFromConfig()}
                                    />
                                )}
                                {getFacetFields().map(field => (
                                    <Facet key={field} field={field} label={field} />
                                ))}
                                </div>
                            }
                            bodyContent={
                                <Results
                                titleField={getConfig().titleField}
                                urlField={getConfig().urlField}
                                shouldTrackClickThrough={true}
                                />
                            }
                            bodyHeader={
                                <React.Fragment>
                                {wasSearched && <PagingInfo />}
                                {wasSearched && <ResultsPerPage />}
                                </React.Fragment>
                            }
                            bodyFooter={<Paging />}
                            />
                        </ErrorBoundary>
                        </div>
                    );
                    }}
                </WithSearch>
            </SearchProvider>
        </div>
    );
}

export default App;