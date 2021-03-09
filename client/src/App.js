import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getRestaurant } from './actions/restaurants';
import Nav from './components/Nav'
import RestaurantPage from './components/RestaurantPage';
import Landing from './components/Landing';
import Search from './components/Search';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import '@elastic/eui/dist/eui_theme_light.css';
// import '@elastic/eui/dist/eui_theme_dark.css';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurant());
    }, [dispatch]);

    return (
        <Router>
            <Nav/>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/search" component={Search} />
                <Route path="/restaurant/:id" component={RestaurantPage} />
            </Switch>
        </Router>
    );
}

export default App;