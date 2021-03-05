import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Landing from './components/Landing.js';
import Search from './components/Search.js';
import RestaurantPage from './components/RestaurantPage.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import '@elastic/eui/dist/eui_theme_dark.css';

const App = () => {

    return (
        <Router>
            <Route path="/" component={Landing} />
            <Route/>

            {/* <RestaurantPage/> */}
            {/* <Landing/> */}
            {/* <Search/> */}
        </Router>
    );
}

export default App;