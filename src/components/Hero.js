import React, { Component } from 'react';
import styled from 'styled-components';

const backgroundImage = require('../images/house-hero.jpg');

class Hero extends Component {
    render() {
        return (
            <Image src={backgroundImage} alt="snowy house"/>
        );
    }
}

export default Hero;

const Image = styled.img`
    width: 100%;
`