import React, { Component } from 'react';
import styled from 'styled-components';

class NavLink extends Component {
    render() {
        return (
            <a href={`#${this.props.linkKey}`}>
                {this.props.linkValue}
            </a>
        );
    }
}

export default NavLink;