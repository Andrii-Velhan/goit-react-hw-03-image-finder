import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Modal from './components/Modal';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

class App extends Component {
  state = {
    query: '',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleFormSubmit = query => {
    this.setState({ query });
    // console.log('query:', name);
  };

  onClickItem = (src, alt) => {
    this.setState({
      largeImage: { src, alt },
    });
    this.toggleModal();
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <button className="Button" type="button" onClick={this.toggleModal}>
          Open modal
        </button>

        <ImageGallery query={this.state.query} />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button className="Button" type="button" onClick={this.toggleModal}>
              Close modal
            </button>
            <h1>modal content</h1>
            <img src="" alt="" />
          </Modal>
        )}
        <ToastContainer autoClose={2500} />
      </>
    );
  }
}

export default App;
