import React, { Component } from 'react'
import { connect } from 'react-redux'
import DateRange from './date-range'
import SelectFilter from './select'
import { filterArticlesByCommentsCount, filterArticlesByDate } from '../../ac'

class Filters extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <SelectFilter
          options={this.selectOptions}
          onChange={this.filterByCommentsCount}
        />
        <DateRange onChange={this.filterByDate} />
      </div>
    )
  }

  get selectOptions() {
    let options = []

    this.props.articles.forEach((article) => {
      const articleCommentsCount = article.comments
        ? article.comments.length
        : 0
      if (options.indexOf(articleCommentsCount) === -1)
        options.push(articleCommentsCount)
    })

    return options.sort().map((option) => ({
      label: `${option} comment(s)`,
      value: option
    }))
  }

  filterByDate = (dateRange) => {
    const { filterArticlesByDate } = this.props
    filterArticlesByDate(dateRange)
  }

  filterByCommentsCount = (selected) => {
    const { filterArticlesByCommentsCount } = this.props
    filterArticlesByCommentsCount(selected.map((option) => option.value))
  }
}

export default connect((state) => ({ articles: state.defaultArticles }), {
  filterArticlesByCommentsCount,
  filterArticlesByDate
})(Filters)
