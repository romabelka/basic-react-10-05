import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ArticleList from '../article-list'
import Article from '../article'
import { i18n } from '../../context/i18n'

class ArticlesPage extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <ArticleList />
        <Route path="/articles/:id" children={this.getArticle} />
      </div>
    )
  }

  getArticle = ({ match }) => {
    return match ? (
      <Article id={match.params.id} key={match.params.id} isOpen />
    ) : (
      <h1>{i18n('selectArticle')}</h1>
    )
  }
}

export default ArticlesPage
