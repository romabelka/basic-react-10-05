import { SET_FILTER_ARTICLES, SET_FILTER_DATES } from '../constants'

const initialFilter = {
  selected: [],
  range: {
    from: null,
    to: null
  }
}

export default (filter = initialFilter, action) => {
  switch (action.type) {
    case SET_FILTER_DATES:
      return { ...filter, range: action.payload }

    case SET_FILTER_ARTICLES:
      return { ...filter, selected: action.payload }

    default:
      return filter
  }
}
