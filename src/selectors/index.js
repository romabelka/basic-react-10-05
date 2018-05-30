import { createSelector } from 'reselect'

const idSelector = (_, props) => props.id
const articlesSelector = (state) => state.articles
const filtersSelector = (state) => state.filters
const commentListSelector = (state) => state.comments
const articleListSelector = (state) => state.articles

export const filtratedArticlesSelector = createSelector(
  articlesSelector,
  filtersSelector,
  (articles, filters) => {
    const {
      selected,
      dateRange: { from, to }
    } = filters
    console.log('---', 'calculating filters')

    return Object.keys(articles).filter((key) => {
      const article = articles[key]
      const published = Date.parse(article.date)
      return (
        (!selected.length ||
          selected.find((selected) => selected.value === article.id)) &&
        (!from || !to || (published > from && published < to))
      )
    })
  }
)

export const createCommentSelector = () => {
  console.log('---', 'creating commentSelector')
  return createSelector(commentListSelector, idSelector, (comments, id) => {
    console.log('---', 'selecting a comment', id)
    return comments[id]
  })
}

export const createArticleSelector = () => {
  return createSelector(articleListSelector, idSelector, (articles, id) => {
    return articles[id]
  })
}
