import React, { Component } from 'react'
import MenuItem from './menu-item'
import { translate } from '../../context/translate'

class Menu extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <h2>{translate('Main Menu')}</h2>
        {this.props.children}
      </div>
    )
  }
}

export { MenuItem }
export default Menu
