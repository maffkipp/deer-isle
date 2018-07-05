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

const Anchor = styled.a`
    text-decoration: none;
    color: white;
    padding: 20px;
    &:hover {
        background-color: green;
    }
`