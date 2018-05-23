import React, { Component } from 'react'
import FilteredArticleList from './containers/filtered-article-list'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'

class App extends Component {
  render() {
    return (
      <div>
        <UserForm />
        <Counter />
        <Filters articles={[]} />
        <FilteredArticleList />
      </div>
    )
  }
}

export default App
