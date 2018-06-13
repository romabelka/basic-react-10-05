import React, { Component } from 'react'
import MenuItem from './menu-item'
import { i18n } from '../../context/i18n'

class Menu extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <h2>{i18n('mainMenu')}</h2>
        {this.props.children}
      </div>
    )
  }
}

export { MenuItem }
export default Menu
