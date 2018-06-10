import { SUCCESS, LOAD_PAGE_COMMENTS, START } from '../constants'
import { Record, OrderedMap, List } from 'immutable'

const PageRecord = Record({
  id: null,
  loading: false,
  comments: new List([])
})

const ReducerRecord = Record({
  entities: new OrderedMap({}),
  total: 0
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, response } = action

  switch (type) {
    case LOAD_PAGE_COMMENTS + START:
      return state.hasIn(['entities', payload.page])
        ? state.setIn(['entities', payload.page, 'loading'], true)
        : state.setIn(
            ['entities', payload.page],
            new PageRecord({
              id: payload.page,
              loading: true
            })
          )

    case LOAD_PAGE_COMMENTS + SUCCESS:
      return state
        .setIn(['entities', payload.page, 'loading'], false)
        .setIn(
          ['entities', payload.page, 'comments'],
          new List(response.records.map((comment) => comment.id))
        )
        .set('total', response.total)

    default:
      return state
  }
}
