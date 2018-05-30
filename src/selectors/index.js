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

    const newArticles = {}
    for (let i in articles) {
      const published = Date.parse(articles[i].date)
      if (
        (!selected.length ||
          selected.find((selected) => selected.value === articles[i].id)) &&
        (!from || !to || (published > from && published < to))
      )
        newArticles[i] = articles[i]
    }
    return newArticles
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
  return createSelector(articlesSelector, idSelector, (articles, id) => {
    return articles[id]
  })
}

export const selectArticlesSelector = createSelector(
  articlesSelector,
  (articles) => {
    console.log(articles)
    let newArticles = []
    for (let i in articles) {
      newArticles.push({ label: articles[i].title, value: articles[i].id })
    }
    return newArticles
  }
)
