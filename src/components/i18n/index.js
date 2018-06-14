import React, { Component as ReactComponent } from 'react'
import { Consumer } from './context'

export default (Component) =>
  class Translate extends ReactComponent {
    render() {
      return <Component {...this.props} t={this.translate} />
    }

    translate = (text) => (
      <Consumer>{(dictionary) => dictionary[text] || text}</Consumer>
    )
  }
