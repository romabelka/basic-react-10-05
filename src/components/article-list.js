import React, { Component } from 'react'
import Article from './article'
import accordion from '../decorators/accordion'
import PropTypes from 'prop-types'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    // openItemId: PropTypes.any.isRequired,
    // Попытался прописать чтобы проверял openItemId, но proptypes ругается либо на то, что он null (менял в декораторе чтобы присваивался не null, а false),
    // тогда тесты ругаются что openItemId undefined
    toggleOpenItem: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.fetchData && this.props.fetchData()
  }

  render() {
    const articleElements = this.props.articles.map((article) => (
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

export default accordion(ArticleList)
