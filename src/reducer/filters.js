import { SELECTED_ARTICLE, SELECTED_DATE_ARTICLE } from '../constants'
import defaultArticles from '../fixtures'

const defaultFilters = {
  selected: [],
  dateRange: {
    from: null,
    to: null
  }
}

export default (filters = defaultFilters, action) => {
  const { type, payload } = action

  switch (type) {
    case SELECTED_ARTICLE:
        return {...filters, selected: payload.selected}
    case SELECTED_DATE_ARTICLE:
        return { ...filters, dateRange: payload.dateRange}

    default:
      return filters
  }
}
