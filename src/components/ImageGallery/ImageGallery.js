import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './ImageGallery.css';
// import { toast } from 'react-toastify';
// import ImageGalleryItem from '../ImageGalleryItem';
// import Button from '../Button';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import Loader from 'react-loader-spinner';

class ImageGallery extends Component {
  state = {
    name: [],
  };
  static propTypes = {};

  componentDidUpdate(prevProps, prevState) {
    const prevItem = prevProps.name;
    const nextItem = this.props.name;

    if (prevItem !== nextItem) {
      // console.log('prevProps.name: ', prevProps.name);
      // console.log('this.props.name: ', this.props.name);
      console.log('name was changed:)');
      fetch(
        `https://pixabay.com/api/?q=${this.props.name}&page=1&key=19199733-53a137615acbd00e25277177c&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        .then(name => this.setState({ name }));
      console.log(this.state.name.hits);
    }
  }

  render() {
    return (
      <>
        <ul className="ImageGallery">
          {this.state.name.hits &&
            this.state.name.hits.map(({ id, webformatURL, tags }) => (
              <li className="ImageGalleryItem">
                <img
                  src={webformatURL}
                  alt={tags}
                  className="ImageGalleryItem-image"
                />
              </li>
            ))}
        </ul>
      </>
    );
  }
}

export default ImageGallery;
