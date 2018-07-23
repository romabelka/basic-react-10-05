import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class MenuItem extends Component {
  static propTypes = {}

  render() {
    return (
      <NavLink
        to={this.props.path}
        activeStyle={{ color: 'red' }}
        className="nav-item"
        activeClassName="active"
        style={{ margin: '5px 15px' }}
      >
        {this.props.children}
      </NavLink>
    )
  }
}

export default MenuItem
