import React from 'react';
import './css/Landing.css';
import About from './About.js'

const Landing = () => {
    return (

            <React.Fragment>
                <div class="landing-body">
                    <h1 class = "landing-title">restaurant review topic categorizer & analyzer</h1>
                </div>
                <About/>
            </React.Fragment>

    );
}

export default Landing;
