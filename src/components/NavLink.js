import React, { Component } from 'react';

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