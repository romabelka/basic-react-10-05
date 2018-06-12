import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ArticleRoute from './components/routes/articles'
import CommentsPage from './components/routes/comments-page'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import Menu, { MenuItem } from './components/menu'
import { Provider as UserProvider } from './context/user'
import { translate, Provider as TranslateProvider } from './context/translate'

class App extends Component {
  state = {
    username: 'roma',
    language: 'en'
  }

  handleUserChange = (username) => this.setState({ username })

  handleLanguageChange = () =>
    this.setState({
      language: this.state.language === 'en' ? 'ru' : 'en'
    })

  render() {
    return (
      <TranslateProvider value={this.state.language}>
        <UserProvider value={this.state.username}>
          <div>
            <div>
              <button onClick={this.handleLanguageChange}>
                {translate('En')}
              </button>
            </div>
            <Menu>
              <MenuItem path="/filters">{translate('Filters')}</MenuItem>
              <MenuItem path="/articles">{translate('Articles')}</MenuItem>
              <MenuItem path="/counter">{translate('Counter')}</MenuItem>
              <MenuItem path="/comments/1">{translate('Comments')}</MenuItem>
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
              <Route
                path="/error"
                render={() => <h1>{translate('Some Error')}</h1>}
              />
              <Route
                path="/"
                render={() => <h1>{translate('Not Found')}</h1>}
              />
            </Switch>
          </div>
        </UserProvider>
      </TranslateProvider>
    )
  }
}

export default App
