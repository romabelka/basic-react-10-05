import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import ArticleList from './components/article-list'
import Chart from './components/chart'
import UserForm from './components/user-form'
import Filters from './components/filters/index'
import PropTypes from 'prop-types'

class App extends Component {
  static defaultProps = {
    articles: PropTypes.array.isRequired
  }
  render() {
    const { articles } = this.props
    return (
      <div>
        <UserForm />
        <Filters articles={articles} />
        <ArticleList articles={articles} ref={this.setArticleListRef} />
        <Chart articles={articles} />
      </div>
    )
  }

  setArticleListRef = (articleList) => {
    console.log('---', 'article list', findDOMNode(articleList))
  }
}

export default App
