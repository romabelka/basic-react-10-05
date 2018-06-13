import React, { createContext } from 'react'

const { Provider, Consumer } = createContext()
const text = {
  en: {
    en: 'English',
    ru: 'Russian',
    mainMenu: 'Main Menu',
    filters: 'Filters',
    articles: 'Articles',
    counter: 'Counter',
    comments: 'Comments',
    addNewArticle: 'Add New Article',
    someError: 'Some Error',
    notFound: 'Not Found',
    selectArticle: 'Please select an article',
    loading: 'Loading',
    open: 'open',
    close: 'close',
    delete: 'delete',
    showComments: 'show comments',
    hideComments: 'hide comments',
    user: 'user',
    comment: 'comment',
    submitButton: 'submit',
    author: 'by'
  },
  ru: {
    en: 'Английский',
    ru: 'Русский',
    mainMenu: 'Главное меню',
    filters: 'Фильтры',
    articles: 'Статьи',
    counter: 'Счётчик',
    comments: 'Комментарии',
    addNewArticle: 'Добавить статью',
    someError: 'Непредвиденная ошибка',
    notFound: 'Страница не найдена',
    selectArticle: 'Пожалуйста, выберите статью',
    loading: 'Загрузка',
    open: 'открыть',
    close: 'закрыть',
    delete: 'удалить',
    showComments: 'показать комментарии',
    hideComments: 'скрыть комментарии',
    user: 'имя',
    comment: 'комментарий',
    submitButton: 'отправить',
    author: 'пишет'
  }
}

function i18n(key) {
  return (
    <Consumer>
      {(locale) => (text[locale] ? text[locale][key] || key : key)}
    </Consumer>
  )
}
export { Provider, Consumer, i18n }
