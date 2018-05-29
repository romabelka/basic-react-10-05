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
      return Object.keys(articleState)
        .filter((key) => key !== payload.id)
        .reduce(
          (acc, key) => ({
            ...acc,
            [key]: articleState[key]
          }),
          {}
        )

    default:
      return articleState
  }
}
