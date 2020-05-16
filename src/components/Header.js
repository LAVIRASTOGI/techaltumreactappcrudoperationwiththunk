import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Header extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="topnav">
                <Link to="/">Home</Link>
              <Link to="/about-us">About Us</Link>  
              <Link to="/counter">Counter</Link>
                <Link to="/emp-list">Employee List</Link>
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/topics">Topics</Link>
            </div>
        );
    }
}


export default Header;
