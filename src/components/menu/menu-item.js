import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class MenuItem extends Component {
  static propTypes = {}

  render() {
    return (
      <NavLink
        to={this.props.path}
        activeStyle={{ color: 'black' }}
        className="nav-item"
        activeClassName="active"
        style={{ margin: '0 16px' }}
      >
        {this.props.children}
      </NavLink>
    )
  }
}

export default MenuItem
