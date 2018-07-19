import React, { Component } from 'react';
import styled from 'styled-components';

class NavLink extends Component {
    render() {
        return (
            <Anchor href={`#${this.props.linkKey}`}>
                {this.props.linkValue}
            </Anchor>
        );
    }
}

export default NavLink;

// Styled components
const Anchor = styled.a`
    display: inline-block;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: white;
    padding: 20px;
    transition: background-color 200ms;
    &:hover {
        background-color: #757575;
        transition: background-color 200ms;
    }
`