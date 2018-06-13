import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ArticleRoute from './components/routes/articles'
import CommentsPage from './components/routes/comments-page'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import Menu, { MenuItem } from './components/menu'
import { Provider as UserProvider } from './context/user'
import { Provider as I18nProvider, i18n } from './context/i18n'
import { DEFAULT_LOCALE } from './constants'

class App extends Component {
  state = {
    username: 'roma',
    locale: DEFAULT_LOCALE
  }

  handleUserChange = (username) => this.setState({ username })
  handleLocaleChange = () => {
    const locale = this.state.locale === DEFAULT_LOCALE ? 'ru' : DEFAULT_LOCALE
    this.setState({ locale })
  }

  render() {
    return (
      <I18nProvider value={this.state.locale}>
        <UserProvider value={this.state.username}>
          <div>
            <button onClick={this.handleLocaleChange}>
              {this.state.locale}
            </button>
            <Menu>
              <MenuItem path="/filters">{i18n('filters')}</MenuItem>
              <MenuItem path="/articles">{i18n('articles')}</MenuItem>
              <MenuItem path="/counter">{i18n('counter')}</MenuItem>
              <MenuItem path="/comments/1">{i18n('comments')}</MenuItem>
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
                render={() => <h1>{i18n('addNewArticle')}</h1>}
              />
              <Route path="/articles" component={ArticleRoute} />
              <Route path="/comments" component={CommentsPage} />
              <Route
                path="/error"
                render={() => <h1>{i18n('someError')}</h1>}
              />
              <Route path="/" render={() => <h1>{i18n('notFound')}</h1>} />
            </Switch>
          </div>
        </UserProvider>
      </I18nProvider>
    )
  }
}

export default App
