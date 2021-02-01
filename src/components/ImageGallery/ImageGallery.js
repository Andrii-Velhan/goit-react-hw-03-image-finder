import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './ImageGallery.css';
// import { toast } from 'react-toastify';
import ImageGalleryItem from '../ImageGalleryItem';
// import Button from '../Button';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import Loader from 'react-loader-spinner';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
class ImageGallery extends Component {
  state = {
    item: [],
    error: null,
    status: Status.IDLE,
    page: 1,
    largeImage: {
      src: '',
      alt: '',
    },
  };
  static propTypes = {};

  componentDidUpdate(prevProps, prevState) {
    const prevItem = prevProps.query;
    const nextItem = this.props.query;

    if (prevItem !== nextItem) {
      console.log('prevProps.query: ', prevProps.query);
      console.log('this.props.query: ', this.props.query);
      console.log('query was changed:)');

      this.setState({ status: Status.PENDING });
      fetch(
        `https://pixabay.com/api/?q=${this.props.query}&page=${this.state.page}&key=19199733-53a137615acbd00e25277177c&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(new Error(`Image ${nextItem} not found!`));
        })
        .then(item => this.setState({ item, status: Status.RESOLVED }))
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  render() {
    const { item, error, status, onClickItem } = this.state;
    // const { query } = this.props;

    if (status === 'idle') {
      return <div>Enter image or photo query.</div>;
    }

    if (status === 'pending') {
      return <div>Loading...</div>;
      // <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === 'rejected') {
      return (
        <h1>
          <span>error message:</span>
          {error.message}
        </h1>
      );
      //  <PokemonErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <ul className="ImageGallery">
          <ImageGalleryItem item={item} onClick={onClickItem} />
        </ul>
      );

      // <PokemonDataView pokemon={pokemon} />;
    }
  }
}

export default ImageGallery;
