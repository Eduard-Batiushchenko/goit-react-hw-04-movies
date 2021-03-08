import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.scss';

class SearchForm extends Component {
  state = {
    text: '',
  };

  handleInputText(value) {
    this.setState({ text: value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.handleFormSubmit(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <form className="search-form" onSubmit={e => this.onSubmit(e)}>
        <label>
          <input
            className="search-form-input"
            type="text"
            value={this.state.text}
            onChange={e => this.handleInputText(e.target.value)}
          />
          <button className="search-form-submit" type="submit">
            Search
          </button>
        </label>
      </form>
    );
  }
}

SearchForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
