import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class MenuItem extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <NavLink to={this.props.path} activeStyle={{ color: 'red' }}>
          {this.props.children}
        </NavLink>
      </div>
    )
  }
}

export default MenuItem
