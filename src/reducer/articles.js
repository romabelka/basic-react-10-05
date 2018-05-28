import {
  DELETE_ARTICLE,
  FILTER_ARTICLES_BY_DATE,
  FILTER_ARTICLES_BY_COMMENTS_COUNT
} from '../constants'
import defaultArticles from '../fixtures'

let deleted = [],
  commentsCountFiltered = [],
  dateFiltered = []

export default (articleState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      defaultArticles.forEach((article) => {
        if (article.id === payload.id) deleted.push(article.id)
      })
      break

    case FILTER_ARTICLES_BY_DATE:
      dateFiltered = []
      const fromMs = new Date(payload.from).getTime() || -Infinity,
        toMs = new Date(payload.to).getTime() || Infinity

      defaultArticles.forEach((article) => {
        const articleDateMs = new Date(article.date).getTime()
        if (articleDateMs > toMs || articleDateMs < fromMs)
          dateFiltered.push(article.id)
      })
      break

    case FILTER_ARTICLES_BY_COMMENTS_COUNT:
      const { countOptions } = payload
      commentsCountFiltered = []

      if (countOptions.length) {
        defaultArticles.forEach((article) => {
          const count = article.comments ? article.comments.length : 0
          if (!countOptions.some((option) => option === count)) {
            commentsCountFiltered.push(article.id)
          }
        })
      }

      break

    default:
      return articleState
  }

  return defaultArticles.filter((article) => {
    return ![...deleted, ...commentsCountFiltered, ...dateFiltered].some(
      (deleted) => deleted === article.id
    )
  })
}
