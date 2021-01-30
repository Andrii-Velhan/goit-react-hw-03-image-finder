import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';
// import { toast } from 'react-toastify';
// import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';
import './Searchbar.css';

class Searchbar extends Component {
  state = {
    name: '',
    // number: '',
  };

  static propTypes = {
    //
  };

  static defaultProps = {};

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // this.setState({ name: event.currentTarget.value.toLoverCace() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name } = this.state;

    // console.log(name);

    if (name === '') {
      alert('Enter data !!!');
    } else {
      this.props.onSubmit(name);

      this.setState({ name: '' });
    }
  };

  render() {
    // const { name } = this.state;
    return (
      <>
        <form className="Searchbar" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            // id="name"
            className="Searchbar__input"
          />

          <button type="submit" className="Searchbar__button">
            <ImSearch style={{ marginRight: 8 }} />
            Search
          </button>
        </form>
      </>
    );
  }
}

export default Searchbar;
