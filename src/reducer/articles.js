import { DELETE_ARTICLE, SUBMIT_COMMENT } from '../constants'
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
    case SUBMIT_COMMENT:
      const article = articleState[payload.parent]
      articleState[payload.parent] = {
        ...article,
        comments: [...article.comments, payload.comment.id]
      }
      return { ...articleState }

    case DELETE_ARTICLE:
      let newArticleState = {}
      for (let i in articleState) {
        if (articleState[i].id !== payload.id)
          newArticleState[i] = articleState[i]
      }
      return newArticleState

    default:
      return articleState
  }
}
