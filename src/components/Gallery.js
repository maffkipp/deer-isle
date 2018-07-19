import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';

export default class Gallery extends Component {
    render() {
        // Import dummy images; change later to Contentful
        const images = [
            {
              original: 'http://lorempixel.com/1000/600/nature/1/',
              thumbnail: 'http://lorempixel.com/250/150/nature/1/',
            },
            {
              original: 'http://lorempixel.com/1000/600/nature/2/',
              thumbnail: 'http://lorempixel.com/250/150/nature/2/'
            },
        ];

        return (
            <ImageGallery items={images} />
        );
    }
}