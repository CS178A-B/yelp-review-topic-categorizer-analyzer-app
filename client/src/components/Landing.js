import React from 'react';
import { Link } from 'react-router-dom';

import {
    EuiPage,
    EuiPageContent,
    EuiEmptyPrompt,
    EuiPageBody,
    EuiTitle,
    EuiSpacer,
    EuiButton,
  } from '@elastic/eui';

import './css/Landing.css';
import About from './About.js'

const Landing = ({ button = <></>, content }) => {
    return (

            <React.Fragment>
                    <EuiPage paddingSize="none" class="landing-body">

                        <div class="landing-feature">

                        <style>
                          @import url('https://fonts.googleapis.com/css2?family=Potta+One&display=swap');
                        </style>

                        <h1 class="landing-title">Yelp Review Topic Categorizer & Analyzer</h1>

                            <EuiPageBody paddingSize="1">
                                <EuiPageContent
                                verticalPosition="center"
                                horizontalPosition="center"
                                paddingSize="none">

                                    <div class="landing-content">

                                    <EuiEmptyPrompt
                                        iconType="discoverApp"
                                        iconColor={null}
                                        title={<h2>Find your <span class="underline--magical">eating experience</span>.</h2>}
                                        titleSize="l"
                                        body={
                                        <React.Fragment>
                                            <p>
                                            Each restaurant has that eating experience they're known for. It could be their mouth-watering food, their Instagram-worthy ambience, or friendly service that makes you want to come back for more.
                                            </p>

                                            <p>
                                                The <span class="underline--magical">Yelp Review Topic Categorizer & Analyzer</span> uses machine learning technology to categorize and analyze the sentiments of Yelp Reviews to determine the strengths of a restaurant.
                                            </p>

                                            <p>Narrow down your dining preferences to find the perfect place for you!</p>

                                        </React.Fragment>
                                        }
                                        actions={
                                        <Link to={'/search'}>
                                            <EuiButton size="s" color="primary" fill>
                                                Search Restaurants
                                            </EuiButton>
                                        </Link>
                                        }
                                    />

                                    <About/>
                                </div>

                                </EuiPageContent>
                            </EuiPageBody>
                        </div>

                    </EuiPage>

            </React.Fragment>

    );
}

export default Landing;
