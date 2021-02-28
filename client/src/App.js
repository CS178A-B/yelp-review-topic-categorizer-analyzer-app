import React from 'react';
import ReactDOM from 'react-dom';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Button from 'react-bootstrap/Button'
// import SearchPage from './SearchPage';

import restaurantinside from './images/restaurantinside.png'

const App = () => {
    return (
        <Container maxwidth="lg">
           <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Yelpapp</Typography>   
                <img src={restaurantinside} alt="restaurantinside" height="60" />
            </AppBar>     
        </Container>
    );
}

export default App;