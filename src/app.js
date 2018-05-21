import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import ArticleList from './components/article-list'
import Chart from './components/chart'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'

class App extends Component {
  render() {
    const { articles } = this.props
    return (
      <div>
        <UserForm />
        <Counter />
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
