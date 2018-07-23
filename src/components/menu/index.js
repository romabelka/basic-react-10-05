import React, { Component } from 'react'
import MenuItem from './menu-item'

class Menu extends Component {
  static propTypes = {}

  render() {
    return (
      <nav className="navbar mr-auto navbar-light bg-light">
        {this.props.children}
      </nav>
    )
  }
}

export { MenuItem }
export default Menu
