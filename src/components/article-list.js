import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordion from '../decorators/accordion'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.object.isRequired,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleItem: PropTypes.func
  }

  componentWillMount() {
    this.props.fetchData && this.props.fetchData()
  }

  render() {
    const { articlesList, articlesIds, articleDates } = this.props.articles
    const articleElements = articlesList
      .filter(
        (article) =>
          articlesIds.includes(article.id) ||
          !articlesIds ||
          !articlesIds.length
      )
      .filter(
        (article) =>
          !articleDates ||
          (new Date(article.date) < new Date(articleDates.to) &&
            new Date(article.date) > new Date(articleDates.from))
      )
      .map((article) => (
        <li key={article.id} className="test__article-list_item">
          <Article
            article={article}
            isOpen={article.id === this.props.openItemId}
            toggleOpen={this.props.toggleOpenItem}
          />
        </li>
      ))
    return <ul>{articleElements}</ul>
  }
}

export default connect((state) => ({
  articles: state.articles
}))(accordion(ArticleList))
