import React, { Component } from 'react'
import MenuItem from './menu-item'
import t from '../../i18n'

class Menu extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <h2>{t('mainMenu')}</h2>
        {this.props.children}
      </div>
    )
  }
}

export { MenuItem }
export default Menu
