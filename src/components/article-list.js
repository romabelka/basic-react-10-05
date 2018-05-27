import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordion from '../decorators/accordion'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    filters: PropTypes.object.isRequired,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleItem: PropTypes.func
  }

  componentWillMount() {
    this.props.fetchData && this.props.fetchData()
  }

  getFilteredArticles() {
    const selectionFilterApplied = this.props.filters.filterByTitleIsApplied
    const dateFilterApplied = this.props.filters.filterByDateIsApplied

    if (!selectionFilterApplied && !dateFilterApplied) {
      return this.props.articles
    } else if (selectionFilterApplied && !dateFilterApplied) {
      return this.props.articles.filter((article) => article.passesTitleFilter)
    } else if (!selectionFilterApplied && dateFilterApplied) {
      return this.props.articles.filter((article) => article.passesDateFilter)
    } else {
      return this.props.articles.filter(
        (article) => article.passesTitleFilter && article.passesDateFilter
      )
    }
  }

  render() {
    const articleElements = this.getFilteredArticles().map((article) => (
      <li key={article.id} className="test__article-list_item">
        <Article
          article={article}
          isOpen={article.id === this.props.openItemId}
          toggleOpen={this.props.toggleOpenItem}
        />
      </li>
    ))

    if (articleElements.length > 0) {
      return <ul>{articleElements}</ul>
    } else {
      return <div>No articles meet the filter criteria.</div>
    }
  }
}

export default connect((state) => ({
  articles: state.articles,
  filters: state.filters
}))(accordion(ArticleList))
