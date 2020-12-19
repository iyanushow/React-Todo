import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

export default class NewButton extends Component {
  handleClick = () => {
    const { delTodo, todoItem } = this.props;
    delTodo(todoItem.id);
  };

  render() {
    return (
      <Button
        color="red"
        content="Delete"
        size="mini"
        onClick={this.handleClick}
        circular
        animated="vertical"
        className="delete"
      >
        <Button.Content hidden>Delete</Button.Content>
        <Button.Content visible>
          <Icon name="trash" />
        </Button.Content>
      </Button>
    );
  }
}
