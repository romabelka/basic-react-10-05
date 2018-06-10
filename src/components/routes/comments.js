import React, { Component } from 'react'
import { Route } from 'react-router-dom'

class CommentsPage extends Component {
  static propTypes = {}

  render() {
    console.log('--- comments page match', this.props.match)

    return (
      <div>
        <Route path="/comments/:page" children={this.getComments} />
      </div>
    )
  }

  getComments = ({ match }) => {
    console.log('---', 'comment match', match)
    const passedPage = match ? parseInt(match.params.page, 10) : 1
    const page = passedPage && passedPage > 0 ? passedPage : 1
    return <div>search {this.getSearch(page)}</div>
  }

  getSearch = (page) => {
    const limit = 5
    const offset = (page - 1) * limit
    return `limit=${limit}&offset=${offset}`
  }
}

export default CommentsPage
