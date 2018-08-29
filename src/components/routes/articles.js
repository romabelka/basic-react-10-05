import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ArticleList from '../article-list'
import Article from '../article'

class ArticlesPage extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="row">
        <div className="col-3">
          <ArticleList />
        </div>
        <div className="col-9">
          <Route path="/articles/:id" children={this.getArticle} />
        </div>
      </div>
    )
  }

  getArticle = ({ match }) => {
    return match ? (
      <Article id={match.params.id} key={match.params.id} isOpen />
    ) : (
      <h1
        className="display-3"
        style={{ textAlign: 'center', alignSelf: 'center' }}
      >
        Please select an article
      </h1>
    )
  }
}

export default ArticlesPage
