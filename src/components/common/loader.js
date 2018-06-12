import React from 'react'
import { translate } from '../../context/translate'

function Loader() {
  return <h1>{translate('Loading...')}</h1>
}

Loader.propTypes = {}

export default Loader
