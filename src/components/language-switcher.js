import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer as LangConsumer } from '../context/language'

import { LANGUAGES } from '../constants'

class LanguageSwitcher extends Component {
  static propTypes = {
    onLangChange: PropTypes.func.isRequired
  }

  render() {
    return (
      <ul>
        <LangConsumer>
          {(activeLang) => this.getLanguageList(activeLang)}
        </LangConsumer>
      </ul>
    )
  }

  getLanguageList(activeLang) {
    return Object.values(LANGUAGES).map((lang) => (
      <li
        onClick={() => this.props.onLangChange(lang)}
        style={activeLang === lang ? { color: 'red' } : null}
        key={lang}
      >
        {lang}
      </li>
    ))
  }
}

export default LanguageSwitcher
