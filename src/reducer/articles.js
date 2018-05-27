import {
  DELETE_ARTICLE,
  FILTER_ARTICLES_BY_TITLE,
  FILTER_ARTICLES_BY_DATE
} from '../constants'
import defaultArticles from '../fixtures'

const defaultFiltersState = {
  filterByTitleIsApplied: false,
  filterByDateIsApplied: false
}

export const articles = (articleState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articleState.filter((article) => article.id !== payload.id)

    case FILTER_ARTICLES_BY_TITLE:
      return articleState.map((article) => ({
        ...article,
        passesTitleFilter: payload.ids.indexOf(article.id) >= 0
      }))

    case FILTER_ARTICLES_BY_DATE:
      return articleState.map((article) => ({
        ...article,
        passesDateFilter: payload.ids.indexOf(article.id) >= 0
      }))

    default:
      return articleState
  }
}

export const filters = (filtersState = defaultFiltersState, action) => {
  const { type, payload } = action

  switch (type) {
    case FILTER_ARTICLES_BY_TITLE:
      const filteredByTitle = payload.filterIsApplied
      return {
        filterByTitleIsApplied: filteredByTitle,
        filterByDateIsApplied: filtersState.filterByDateIsApplied
      }

    case FILTER_ARTICLES_BY_DATE:
      const filteredByDate = payload.filterIsApplied
      return {
        filterByTitleIsApplied: filtersState.filterByTitleIsApplied,
        filterByDateIsApplied: filteredByDate
      }

    default:
      return filtersState
  }
}
