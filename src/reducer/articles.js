import { DELETE_ARTICLE } from '../constants'
import { normalizedArticles } from '../fixtures'

const defaultArticles = normalizedArticles.reduce(
  (acc, article) => ({
    ...acc,
    [article.id]: article
  }),
  {}
)

export default (articleState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return Object.values(articleState).filter(
        (article) => article.id !== payload.id
      )

    default:
      return articleState
  }
}
