import React, { Component } from 'react';
import '../App.css';

class NavBar extends Component {
    render () {
        return (
            <div>
                <nav class="navbar navbar-expand-md navbar-light bg-light mb-4">
                    <div class="container-fluid">
                    <a class="navbar-brand" href="#">TEAM COOL</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav me-auto mb-2 mb-md-0">
                            <li class="nav-item active">
                                <a class="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" aria-current="page" href="#">Code</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" aria-current="page" href="#">Team</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;
