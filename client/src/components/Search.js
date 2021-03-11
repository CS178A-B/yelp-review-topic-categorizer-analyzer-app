import React from "react";
import ResultView from "./ResultView.js";


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
import './css/Pages.css'

import {
    buildAutocompleteQueryConfig,
    buildFacetConfigFromConfig,
    buildSearchOptionsFromConfig,
    buildSortOptionsFromConfig,
    getConfig,
    getFacetFields
} from "../config/config-helper";

// import { getPosts } from './actions/posts';

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

const Search = () => {
    return (
        <SearchProvider config={config} class="app-body">
            <WithSearch mapContextToProps={({ wasSearched }) => ({ wasSearched })}>
                {({ wasSearched }) => {
                return (
                    <div class="app-body">
                    <div className="App">
                    <ErrorBoundary>
                        
                        <Layout
                        header={<SearchBox autocompleteSuggestions={true} />}
                        sideContent={
                            <div>
                            {/* {wasSearched && (
                                <Sorting
                                label={"Sort by"}
                                sortOptions={buildSortOptionsFromConfig()}
                                />
                            )} */}
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
                            resultView={ResultView}
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
                    </div>
                );
                }}
            </WithSearch>
        </SearchProvider>
    );
}

export default Search;