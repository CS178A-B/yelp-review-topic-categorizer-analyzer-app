import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Nav from './components/Nav'
import RestaurantPage from './components/RestaurantPage';
import Landing from './components/Landing';
import Search from './components/Search';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import '@elastic/eui/dist/eui_theme_light.css';
// import '@elastic/eui/dist/eui_theme_dark.css';

const App = () => {

    return (
        <Router>
            <Nav/>
            <Route path="/home" component={Landing} />
            <Route path="/search" component={Search} />
            <Route path="/restaurant/:id" component={RestaurantPage} />
        </Router>
    );
}

export default App;