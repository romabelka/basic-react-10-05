import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ArticleRoute from './components/routes/articles'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'

class App extends Component {
  render() {
    return (
      <div>
        <UserForm />
        <Route path="/counter" component={Counter} />
        <Route path="/filters" component={Filters} />
        <Route path="/articles" component={ArticleRoute} />
      </div>
    )
  }
}

export default App
