import React, { Component } from 'react'
import CommentsPage from '../comments-page'
import { Route } from 'react-router-dom'

const FIRST_PAGE = 1

class CommentsRoute extends Component {
  render() {
    return (
      <div>
        <Route path="/comments/:page" children={this.getCommentsPage} />
      </div>
    )
  }

  getCommentsPage = ({ match }) => {
    if (!match) {
      return null
    }

    const page = Number(match.params.page)
    const normalizedPage = isNaN(page) && page < FIRST_PAGE ? FIRST_PAGE : page

    return <CommentsPage page={normalizedPage} key={normalizedPage} />
  }
}

export default CommentsRoute
