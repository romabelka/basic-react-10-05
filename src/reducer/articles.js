import {
  DELETE_ARTICLE,
  SHOW_ARTICLES,
  SHOW_ARTICLES_BY_DATE,
  INCREMENT
} from '../constants'
import defaultArticles from '../fixtures'

export default (articleState = defaultArticles, action) => {
  const defaultList = defaultArticles
  const articlesIdsToShow = defaultList.map((art) => art.id)
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return {
        articlesList: articleState.articlesList.filter(
          (article) => article.id !== payload.id
        ),
        articlesIds: articleState.articlesIds.filter(
          (article) => article.id !== payload.id
        )
      }

    case SHOW_ARTICLES:
      return {
        articlesList: articleState.articlesList,
        articlesIds: payload.map((art) => art.value),
        articleDates: articleState.articleDates
      }

    case SHOW_ARTICLES_BY_DATE:
      return {
        articlesList: articleState.articlesList,
        articlesIds: articleState.articlesIds,
        articleDates: payload
      }

    case INCREMENT:
      return articleState

    default:
      return {
        articlesList: articleState,
        articlesIds: articlesIdsToShow,
        articleDates: null
      }
  }
}
