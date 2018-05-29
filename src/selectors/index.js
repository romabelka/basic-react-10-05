import { createSelector } from 'reselect'

const idSelector = (_, props) => props.id
const articlesSelector = (state) => state.articles
const filtersSelector = (state) => state.filters
const commentListSelector = (state) => state.comments

export const filtratedArticlesSelector = createSelector(
  articlesSelector,
  filtersSelector,
  (articles, filters) => {
    const {
      selected,
      dateRange: { from, to }
    } = filters
    console.log('---', 'calculating filters')

    return Object.values(articles)
      .filter((article) => {
        const published = Date.parse(article.date)
        return (
          (!selected.length ||
            selected.find((selected) => selected.value === article.id)) &&
          (!from || !to || (published > from && published < to))
        )
      })
      .reduce(
        (acc, article) => ({
          ...acc,
          [article.id]: article
        }),
        {}
      )
  }
)

export const createCommentSelector = () => {
  console.log('---', 'creating commentSelector')
  return createSelector(commentListSelector, idSelector, (comments, id) => {
    console.log('---', 'selecting a comment', id)
    return comments[id]
  })
}
