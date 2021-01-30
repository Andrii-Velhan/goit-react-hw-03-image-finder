import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './ImageGallery.css';
// import { toast } from 'react-toastify';
// import ImageGalleryItem from '../ImageGalleryItem';
// import Button from '../Button';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import Loader from 'react-loader-spinner';

class ImageGallery extends Component {
  static propTypes = {};

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.name !== this.props.name) {
      // console.log('prevProps.name: ', prevProps.name);
      // console.log('this.props.name: ', this.props.name);
      console.log('changed name');
      fetch(
        `https://pixabay.com/api/?q=${this.props.name}&page=1&key=19199733-53a137615acbd00e25277177c&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        .then(console.log);
    }
  }

  render() {
    return (
      <>
        <ul className="ImageGallery">
          <li>{this.props.name}</li>
        </ul>
      </>
    );
  }
}

export default ImageGallery;
