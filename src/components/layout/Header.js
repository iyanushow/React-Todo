import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item
          name = 'TodoList'
          active={activeItem === 'TodoList'}
        >
          TodoList
        </Menu.Item>

        <Menu.Item
          name = 'Add New'
          active={activeItem === 'Add New'}
          onClick={this.handleItemClick}
          className="add-item"
        >
          Add New
        </Menu.Item>

      
      </Menu>
    )
  }
}