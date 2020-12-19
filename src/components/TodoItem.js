import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      color: this.props.todo.completed ? "#8b8a8a" : "#333",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          name=""
          onChange={this.props.makeCompleted.bind(this, id)}
        />
        <p style={this.getStyle()}>{title}</p>
        <Button delTodo={this.props.delTodo} todoItem={this.props.todo} />
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  makeCompleted: PropTypes.object.isRequired,
  delTodo: PropTypes.object.isRequired,
};
export default TodoItem;
