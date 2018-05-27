import { DELETE_ARTICLE, FILTER_ARTICLES } from '../constants'
import defaultArticles from '../fixtures'

export default (articleState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articleState.filter((article) => article.id !== payload.id)

    case FILTER_ARTICLES:
      const selectedArticlesIds = payload.selectedArticles.map(
        (article) => article.value
      )
      return defaultArticles.filter(
        (article) => ~selectedArticlesIds.indexOf(article.id)
      )

    default:
      return articleState
  }
}
