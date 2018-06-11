import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import ArticleRoute from './components/routes/articles'
import CommentsPage from './components/routes/comments-page'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import Menu, { MenuItem } from './components/menu'

class App extends Component {
  render() {
    return (
      <div>
        <Menu>
          <MenuItem path="/filters">Filters</MenuItem>
          <MenuItem path="/articles">Articles</MenuItem>
          <MenuItem path="/counter">Counter</MenuItem>
          <MenuItem path="/comments/1">Comments</MenuItem>
        </Menu>
        <UserForm />
        <Switch>
          <Route path="/counter" component={Counter} exact />
          <Route path="/filters" component={Filters} />
          <Route path="/articles/new" render={() => <h1>Add New Article</h1>} />
          <Route path="/articles" component={ArticleRoute} />
          <Route path="/comments" component={CommentsPage} />
        </Switch>
      </div>
    )
  }
}

export default App
