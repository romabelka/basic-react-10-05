import React from 'react'
import i18n from '../i18n'

function Loader({ t }) {
  return <h1>{t('Loading')}...</h1>
}

Loader.propTypes = {}

export default i18n(Loader)
