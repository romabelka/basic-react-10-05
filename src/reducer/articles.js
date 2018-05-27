import {
  DELETE_ARTICLE,
  FILTER_ARTICLE_BY_IDS,
  FILTER_ARTICLE_BY_PERIOD
} from '../constants'
import defaultArticles from '../fixtures'

const initialState = {
  items: defaultArticles,
  filter: {
    selected: [],
    from: null,
    to: null
  }
}

export default (articleState = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      const items = articleState.items.filter(
        (article) => article.id !== payload.id
      )
      return {
        ...articleState,
        items
      }

    case FILTER_ARTICLE_BY_IDS:
      let { selected } = payload
      if (!selected) {
        selected = []
      }

      return {
        ...articleState,
        filter: {
          ...articleState.filter,
          selected
        }
      }

    case FILTER_ARTICLE_BY_PERIOD:
      let { from, to } = payload

      return {
        ...articleState,
        filter: {
          ...articleState.filter,
          from,
          to
        }
      }
    default:
      return articleState
  }
}
