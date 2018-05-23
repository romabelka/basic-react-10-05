import { UPDATE_FILTER_IDS, UPDATE_FILTER_DATE_RANGE } from '../constants'

const initState = {
  ids: [],
  from: undefined,
  to: undefined
}

export default (articleState = initState, action) => {
  const { type, payload } = action

  switch (type) {
    case UPDATE_FILTER_IDS:
      return {
        ...initState,
        ids: [...payload.ids]
      }

    case UPDATE_FILTER_DATE_RANGE:
      return {
        ...initState,
        from: payload.from,
        to: payload.to
      }

    default:
      return articleState
  }
}
