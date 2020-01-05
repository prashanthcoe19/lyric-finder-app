import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: " "
  };

  static propTypes = {
    searchTracks: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === " ") {
      this.props.setAlert("Please Enter Something", "Light");
    } else {
      this.props.searchTracks(this.state.text);
      this.setState({ text: " " });
    }
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} action=" " className="form">
          <input
            type="text"
            name="text"
            placeholder="&#61442; Enter Title of Song, Artist ..."
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default Search;
