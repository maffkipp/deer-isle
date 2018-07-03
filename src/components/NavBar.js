import React, { Component } from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';

// data to pass to NavLink components. key is the id of element to 
// navigate to, value is the displayed title.
const linkNames = {
    home: 'Home',
    pictures: 'Pictures',
    renting: 'Renting',
    weather: 'Current Weather',
    info: 'Local Info'
};

class NavBar extends Component {
    render() {
        // creates list of NavLink components from object
        const linkList = Object.entries(linkNames).map(([key, value]) => {
            return <NavLink key={key} linkKey={key} linkValue={value} />;
        });

        return (
            <div className='navbar'>
                {linkList}
            </div>
        );
    }
}

export default NavBar;