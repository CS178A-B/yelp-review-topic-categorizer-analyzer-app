import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RestaurantPage from './components/RestaurantPage.js';
import Search from './components/Search.js';
import '@elastic/eui/dist/eui_theme_dark.css';

const App = () => {

    return (
        <div>
            {/* <RestaurantPage/> */}
            <Search/>
        </div>
    );
}

export default App;