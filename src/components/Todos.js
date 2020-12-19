import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    const { todos, makeCompleted, delTodo } = this.props;
    return todos.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          makeCompleted={makeCompleted}
          delTodo={delTodo}
        />
      );
    });
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  makeCompleted: PropTypes.object.isRequired,
  delTodo: PropTypes.object.isRequired,
};
export default Todos;
