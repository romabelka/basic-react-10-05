import React, { createContext } from 'react'

const { Provider, Consumer } = createContext('en')

export const dictionary = {
  ru: {
    en: 'Ru',
    'main menu': 'Главное меню',
    'please select an article': 'Пожалуйста, выберите статью',
    filters: 'Фильтры',
    articles: 'Статьи',
    counter: 'Счетчик',
    comments: 'Комментарии',
    'loading...': 'Загрузка...',
    close: 'Закрыть',
    open: 'Открыть',
    'delete me': 'Удалить',
    'show comments': 'Показать комментарии',
    'hide comments': 'Скрыть комментарии',
    'no comments yet': 'Нет комментариев',
    user: 'Пользователь',
    comment: 'Комментарий',
    submit: 'Отправить',
    increment: 'Увеличить',
    'select...': 'Выберите...',
    'some error': 'Произошла какая-то ошибка',
    'not found': 'Не найдено'
  }
}

export { Provider, Consumer }

export function translate(string) {
  return (
    <Consumer>
      {(language) => {
        return language !== 'en'
          ? dictionary[language][string.toLowerCase()]
          : string
      }}
    </Consumer>
  )
}
