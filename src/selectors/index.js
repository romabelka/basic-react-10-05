import { createSelector } from 'reselect'

const articlesSelector = (state) => state.articles
const filtersSelector = (state) => state.filters

export const filtratedArticlesSelector = createSelector(
  articlesSelector,
  filtersSelector,
  (articles, filters) => {
    const {
      selected,
      dateRange: { from, to }
    } = filters
    console.log('---', 'calculating filters')

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
