import React from 'react';
import { Link } from 'react-router-dom';

import {
    EuiPage,
    EuiPageContent,
    EuiEmptyPrompt,
    EuiPageBody,
    EuiButton,
    EuiSpacer
  } from '@elastic/eui';

import './css/Pages.css';
import About from './About.js'

const Landing = ({ button = <></>, content }) => {
    return (

            <React.Fragment>
                    <EuiPage paddingSize="none" class="app-body">

                        <div class="landing-feature">

                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
                        </style> 

                        <h1> <span class="landing-title underline--magical--title"> yelp review topic categorizer & analyzer </span> </h1>

                            <EuiPageBody paddingSize="1">
                                <EuiPageContent
                                verticalPosition="center"
                                horizontalPosition="center"
                                paddingSize="l">

                                    <div class="page-content">

                                    <EuiEmptyPrompt
                                        iconType="discoverApp"
                                        iconColor={null}
                                        title={<h3>Find your <span class="underline--magical">eating experience</span>.</h3>}
                                        titleSize="l"
                                        body={
                                        <React.Fragment>
                                            <p>
                                            Each restaurant has that eating experience they're known for. It could be their mouth-watering food, their Instagram-worthy ambience, or friendly service that makes you want to come back for more.
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

                                </div>

                                </EuiPageContent>

                                <EuiSpacer/>
                                <EuiSpacer/>
                                <EuiSpacer/>
                                <EuiSpacer/>
                                <EuiSpacer/>
                                <EuiSpacer/>

                                <EuiPageContent
                                verticalPosition="center"
                                horizontalPosition="center"
                                paddingSize="l">

                                    <div class="page-content">

                                    <EuiEmptyPrompt
                                        iconType={"managementApp"}
                                        iconColor={null}
                                        title={<h3>Behind <span class="underline--magical">the scenes</span>.</h3>}
                                        titleSize="l"
                                        body={
                                        <React.Fragment>
                                            <About/>
                                        </React.Fragment>
                                        }
                                    />

                                
                                </div>

                                </EuiPageContent>
                            </EuiPageBody>
                        </div>

                    </EuiPage>

            </React.Fragment>

    );
}

export default Landing;
