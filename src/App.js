import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import MenuBasic from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import Axios from "axios";

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    Axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    ).then((res) => this.setState({ todos: res.data }));
  }
  // Toggle Complete
  makeCompleted = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //  Add New Todo
  addTodo = (title) => {
    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false,
    }).then((res) =>
      this.setState({
        todos: [...this.state.todos, res.data],
      })
    );
  };
  // Delete Todo
  delTodo = (id) => {
    const { todos } = this.state;
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      (res) =>
        this.setState({
          todos: [...todos.filter((todo) => todo.id !== id)],
        })
    );
  };
  render() {
    return (
      <div className="App">
        <MenuBasic />
        <div className="input-form">
          <AddTodo addTodo={this.addTodo} />
        </div>
        <Todos
          todos={this.state.todos}
          makeCompleted={this.makeCompleted}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
