import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordion from '../decorators/accordion'
import { selectedFilteredArticles } from '../selectors/selectors'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleItem: PropTypes.func
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

const mapStateToProps = (state) => ({
  articles: selectedFilteredArticles(state)
})

export default connect(mapStateToProps)(accordion(ArticleList))
