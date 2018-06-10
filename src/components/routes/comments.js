import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CommentsPage from '../comments-page'

class CommentsRoute extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <Route path="/comments/:page" children={this.getCommentsPage} />
      </div>
    )
  }

  getCommentsPage = ({ match }) => {
    const passedPage = match ? parseInt(match.params.page, 10) : 1
    const page = passedPage && passedPage > 0 ? passedPage : 1
    return <CommentsPage page={page} key={page} />
  }
}

export default CommentsRoute
