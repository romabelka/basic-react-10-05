import { createSelector } from 'reselect'

const idSelector = (_, props) => props.id
const commentIdSelector = (_, props) => props.article.comments

export const articlesMapSelector = (state) => state.articles.entities
export const commentsMapSelector = (state) => state.comments.entities

export const articleListSelector = createSelector(
  articlesMapSelector,
  (articlesMap) => articlesMap.valueSeq().toArray()
)
export const commentListSelector = createSelector(
  commentsMapSelector,
  (commentsMap) => commentsMap.valueSeq().toArray()
)

export const loadingArticlesSelector = (state) => state.articles.loading
export const loadingCommentListSelector = (state) => state.comments.loading
export const loadedCommentListSelector = (state) => state.comments.loaded

const filtersSelector = (state) => state.filters
export const filtersSelectionSelector = createSelector(
  filtersSelector,
  (filters) => filters.selected
)

export const filtratedArticlesSelector = createSelector(
  articleListSelector,
  filtersSelector,
  (articles, filters) => {
    const {
      selected,
      dateRange: { from, to }
    } = filters

    return articles.filter((article) => {
      const published = Date.parse(article.date)
      return (
        (!selected.length ||
          selected.find((selected) => selected.value === article.id)) &&
        (!from || !to || (published > from && published < to))
      )
    })
  }
)

export const commentsLoadedSelector = () => {
  return createSelector(
    commentListSelector,
    commentIdSelector,
    (comments, ids) =>
      ids.every((id) => comments.find((comment) => comment.id === id))
  )
}
export const createCommentSelector = () => {
  return createSelector(commentListSelector, idSelector, (comments, id) => {
    return comments.getIn(['entities', id])
  })
}
