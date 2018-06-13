import React from 'react'
import { Consumer } from '../context/language'
import * as dicts from './dictionary'

export default function translate(string) {
  return <Consumer>{(lang) => getTranslatedString(string, lang)}</Consumer>
}

function getTranslatedString(string, lang) {
  return dicts[lang] && dicts[lang][string] ? dicts[lang][string] : string
}
