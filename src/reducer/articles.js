import { Record } from 'immutable'
import {
  DELETE_ARTICLE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  LOAD_ARTICLE_COMMENTS,
  START,
  SUCCESS
} from '../constants'
import { arrToMap } from './utils'

const ArticleModel = new Record({
  id: null,
  title: null,
  text: null,
  date: null,
  loading: false,
  commentsLoading: false,
  commentsLoaded: false,
  comments: []
})

const ReducerRecord = new Record({
  entities: arrToMap([], ArticleModel),
  loading: false,
  loaded: false,
  error: null
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case DELETE_ARTICLE:
      return state.deleteIn(['entities', payload.id])

    case ADD_COMMENT:
      return state.updateIn(
        ['entities', payload.articleId, 'comments'],
        (comments) => comments.concat(randomId)
      )

    case LOAD_ALL_ARTICLES + START:
      return state.set('loading', true)

    case LOAD_ALL_ARTICLES + SUCCESS:
      return state
        .updateIn(['entities'], (entities) =>
          arrToMap(response, ArticleModel).mergeDeep(entities)
        )
        .set('loading', false)
        .set('loaded', true)

    case LOAD_ARTICLE + START:
      return state.setIn(['entities', payload.id, 'loading'], true)

    case LOAD_ARTICLE + SUCCESS:
      return state.setIn(['entities', payload.id], new ArticleModel(response))

    case LOAD_ARTICLE_COMMENTS + START:
      return state.setIn(
        ['entities', payload.articleId, 'commentsLoading'],
        true
      )

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return state
        .setIn(['entities', payload.articleId, 'commentsLoading'], false)
        .setIn(['entities', payload.articleId, 'commentsLoaded'], true)

    default:
      return state
  }
}
