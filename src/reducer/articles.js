import { Record } from 'immutable'
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES } from '../constants'
import { arrToMap } from './utils'

const ArticleModel = new Record({
  id: null,
  title: null,
  text: null,
  date: null,
  comments: []
})

export default (articles = arrToMap([], ArticleModel), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articles.delete(payload.id)

    case ADD_COMMENT:
      return articles.updateIn([payload.articleId, 'comments'], (comments) =>
        comments.concat(randomId)
      )

    case LOAD_ALL_ARTICLES:
      return arrToMap(response, ArticleModel)

    default:
      return articles
  }
}
