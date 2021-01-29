import React, { Component } from 'react';
import './App.css';
import Modal from './components/Modal';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <button className="Button" type="button" onClick={this.toggleModal}>
          Open modal
        </button>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button className="Button" type="button" onClick={this.toggleModal}>
              Close modal
            </button>
            <h1>modal content</h1>
            <img src="" alt="" />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
