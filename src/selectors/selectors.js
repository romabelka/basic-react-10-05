import moment from 'moment'

export const selectArticles = (state) => state.articles

export const selectedFilteredArticles = (state) => {
  const articles = selectArticles(state)
  const { selected, from, to } = articles.filter
  let { items } = articles

  if (selected) {
    const ids = selected.map(function(item) {
      return item.value
    })

    if (ids.length > 0) {
      items = items.filter((article) => ids.indexOf(article.id) !== -1)
    }
  }

  items = items.filter((article) => {
    const articleDate = moment(article.date)
    const dateFrom = from ? moment(from) : null
    const dateTo = from ? moment(to) : null

    if (dateFrom && articleDate.isSameOrBefore(dateFrom.startOf('day'))) {
      return false
    }

    if (dateTo && articleDate.isSameOrAfter(dateTo.endOf('day'))) {
      return false
    }

    return true
  })

  return items
}
