import React from 'react';

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
                            <EuiTitle size="l"><h1 class="landing-title">Yelp Review Topic Categorizer & Analyzer</h1></EuiTitle>
                            <EuiSpacer/>

                            <EuiPageBody paddingSize="l">
                                <EuiPageContent
                                verticalPosition="center"
                                horizontalPosition="center"
                                paddingSize="none">

                                    <div class="landing-content">
                                
                                    <EuiEmptyPrompt
                                        iconType="dataVisualizer"
                                        iconColor={null}
                                        title={<h2>You have no spice</h2>}
                                        titleSize="xs"
                                        body={
                                        <React.Fragment>
                                            <p>
                                            Navigators use massive amounts of spice to gain a limited form of
                                            prescience. This allows them to safely navigate interstellar space,
                                            enabling trade and travel throughout the galaxy.
                                            </p>
                                            <p>You&rsquo;ll need spice to rule Arrakis, young Atreides.</p>
                                        </React.Fragment>
                                        }
                                        actions={
                                        <EuiButton size="s" color="primary" fill>
                                            Harvest spice
                                        </EuiButton>
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
