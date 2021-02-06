import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './ImageGallery.css';
import { toast } from 'react-toastify';
// import ImageGalleryItem from '../ImageGalleryItem';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Modal from '../Modal';
import { MdClear } from 'react-icons/md';
// import Button from '../Button';

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
    showModal: false,
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onClickItem = (src, alt) => {
    this.setState({
      largeImage: { src, alt },
    });
    this.toggleModal();
  };

  render() {
    const { item, error, status, showModal, largeImage } = this.state;
    // const { query } = this.props;

    if (status === 'idle') {
      return <div>Enter image or photo query.</div>;
    }

    if (status === 'pending') {
      return (
        <div className="Loader">
          <Loader
            type="Puff"
            color="#00BFFF"
            height={200}
            width={200}
            timeout={3000}
          />
        </div>
      );
      // <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === 'rejected') {
      // const nextItem = this.props.query;
      // return (
      //   <p className="">
      //     <span className="">{nextItem}</span> is not found.
      //   </p>
      // );
      return toast.error(`${error.message}`);
    }

    if (status === 'resolved') {
      return (
        <>
          {/* <button className="Button" type="button" onClick={this.toggleModal}>
            Open modal
          </button> */}
          <ul className="ImageGallery">
            {item.hits.map(({ webformatURL, largeImageURL, tags }, index) => (
              <li key={index} className="ImageGalleryItem">
                <img
                  // item={item}
                  // onClick={this.onClickItem}
                  src={webformatURL}
                  // largeImageURL={largeImageURL}
                  alt={tags}
                  className="ImageGalleryItem-image"
                  onClick={() => this.onClickItem(largeImageURL, tags)}
                />
              </li>
            ))}
          </ul>
          {showModal && (
            <Modal image={largeImage} onClose={this.toggleModal}>
              <MdClear
                className="btn-close"
                type="button"
                onClick={this.toggleModal}
              />
              <img src={largeImage.src} alt={largeImage.alt} />
            </Modal>
          )}
        </>
      );

      // <PokemonDataView pokemon={pokemon} />;
    }
  }
}

export default ImageGallery;
