import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ArticleList from '../article-list'
import Article from '../article'

class ArticlesPage extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <ArticleList />
        <Route path="/articles/:id" render={this.getArticle} />
      </div>
    )
  }

  getArticle = ({ match }) => {
    return <Article id={match.params.id} isOpen />
  }
}

export default ArticlesPage
