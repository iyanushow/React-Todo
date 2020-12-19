import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: "",
    });
  };

  render() {
    const { title } = this.state;
    return (
      <form style={{ display: "flex", width: "100%" }} onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add New Item"
          value={title}
          onChange={this.onChange}
          style={{ flex: "10", padding: "5px" }}
        />
        <input type="submit" value="Add" className="submit-btn" />
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
