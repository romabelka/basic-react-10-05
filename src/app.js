import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ArticleRoute from './components/routes/articles'
import CommentsPage from './components/routes/comments-page'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import Menu, { MenuItem } from './components/menu'
import { Provider as UserProvider } from './context/user'
import { Provider as I18nProvider } from './context/i18n'

class App extends Component {
  state = {
    username: 'roma',
    locale: 'en'
  }

  handleUserChange = (username) => this.setState({ username })
  handleLocaleChange = () => {
    const locale = this.state.locale === 'en' ? 'ru' : 'en'
    this.setState({ locale })
  }

  render() {
    return (
      <I18nProvider>
        <UserProvider value={this.state.username}>
          <div>
            <button onClick={this.handleLocaleChange}>
              {this.state.locale}
            </button>
            <Menu>
              <MenuItem path="/filters">Filters</MenuItem>
              <MenuItem path="/articles">Articles</MenuItem>
              <MenuItem path="/counter">Counter</MenuItem>
              <MenuItem path="/comments/1">Comments</MenuItem>
            </Menu>
            <UserForm
              value={this.state.username}
              onChange={this.handleUserChange}
            />
            <Switch>
              <Redirect from="/" to="/articles" exact />
              <Route path="/counter" component={Counter} exact />
              <Route path="/filters" component={Filters} />
              <Route
                path="/articles/new"
                render={() => <h1>Add New Article</h1>}
              />
              <Route path="/articles" component={ArticleRoute} />
              <Route path="/comments" component={CommentsPage} />
              <Route path="/error" render={() => <h1>Some Error</h1>} />
              <Route path="/" render={() => <h1>Not Found</h1>} />
            </Switch>
          </div>
        </UserProvider>
      </I18nProvider>
    )
  }
}

export default App
