import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './ImageGallery.css';
// import { toast } from 'react-toastify';
// import ImageGalleryItem from '../ImageGalleryItem';
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
    // status: 'idle',
    status: Status.IDLE,
  };
  static propTypes = {};

  componentDidUpdate(prevProps, prevState) {
    const prevItem = prevProps.query;
    const nextItem = this.props.query;

    if (prevItem !== nextItem) {
      console.log('prevProps.query: ', prevProps.query);
      console.log('this.props.query: ', this.props.query);
      console.log('query was changed:)');

      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${this.props.query}&page=1&key=19199733-53a137615acbd00e25277177c&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(new Error(`Image ${nextItem} not found!`));
        })
        .then(item => this.setState({ item, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));

      console.log(this.state.item.hits);
    }
  }

  render() {
    const { item, error, status } = this.state;
    // const { query } = this.props;

    if (status === 'idle') {
      return <div>Enter image or photo query.</div>;
    }

    if (status === 'pending') {
      return <div>Loading...</div>;
      // <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
      //  <PokemonErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      if (item.hits.length > 0) {
        return (
          <ul className="ImageGallery">
            {item.hits.map(({ id, webformatURL, tags }) => (
              <li id={id} className="ImageGalleryItem">
                {/* {{ status: 'pending' } && <div>Loading...</div>} */}
                <img
                  src={webformatURL}
                  alt={tags}
                  className="ImageGalleryItem-image"
                />
              </li>
            ))}
          </ul>
        );
      } else {
        return (
          <p className="not-found">
            <span className="query">Image {this.props.query} not found!</span>
          </p>
        );
      }
      // <PokemonDataView pokemon={pokemon} />;
    }
  }
}

export default ImageGallery;
