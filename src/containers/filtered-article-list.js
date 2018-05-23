import { connect } from 'react-redux'
import ArticleList from '../components/article-list'
import moment from 'moment'

function getFilteredArticles(articles, { ids, from, to }) {
  let filteredArticles

  if (ids.length) {
    filteredArticles = articles.filter((article) =>
      ids.some((id) => article.id === id)
    )
  } else if (from || to) {
    if (from && to) {
      const momentFrom = moment(from)
      const momentTo = moment(to)

      filteredArticles = articles.filter((article) =>
        moment(article.date).isBetween(momentFrom, momentTo, null, [])
      )
    } else if (from) {
      const momentFrom = moment(from)

      filteredArticles = articles.filter((article) =>
        moment(article.date).isSameOrAfter(momentFrom)
      )
    } else {
      const momentTo = moment(to)

      filteredArticles = articles.filter((article) =>
        moment(article.date).isSameOrBefore(momentTo)
      )
    }
  } else {
    filteredArticles = articles
  }

  return filteredArticles
}

export default connect((state) => ({
  articles: getFilteredArticles(state.articles, state.filters)
}))(ArticleList)
