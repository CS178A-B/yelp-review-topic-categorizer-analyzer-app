import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Posts from './components/Posts/Posts'
import Search from './components/Search.js';
import { getPosts } from './actions/posts';

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
    );
}

export default App;