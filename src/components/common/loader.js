import React from 'react'
import { i18n } from '../../context/i18n'

function Loader() {
  return <h1>{i18n('loading')}...</h1>
}

Loader.propTypes = {}

export default Loader
