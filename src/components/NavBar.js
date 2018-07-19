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
            <Nav>{linkList}</Nav>
        );
    }
}

export default NavBar;

//Styled Components
const Nav = styled.div`
    position: fixed;
    display: flex;
    justify-content: end;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    width: 100%;
    height: 60px;
    background-color: #616161;
`