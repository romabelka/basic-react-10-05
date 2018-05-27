export default (state) => {
  let articles = state.articles
  const selectedIds = state.selected.map((option) => option.value)
  const from = state.range.from || new Date(0)
  const to = state.range.to || new Date()

  if (selectedIds[0])
    articles = articles.filter((article) => ~selectedIds.indexOf(article.id))

  return articles.filter((article) => {
    const articleDate = new Date(article.date)
    return from <= articleDate && articleDate <= to
  })
}
