import React, { Component } from 'react'
import Loader from '../components/common/loader'
import Comment from '../components/comment'
import { connect } from 'react-redux'
import { loadCommentsPage } from '../ac'
import { pageSelector, commentsPageSelector } from '../selectors'

class CommentsPage extends Component {
  constructor(props) {
    super(props)
    const { page, comments, loadCommentsPage } = this.props
    if (!comments || (!page.loaded && !page.loading)) loadCommentsPage(page)
  }
  render() {
    return <div>{this.getComments()}</div>
  }

  getComments() {
    const { page, comments } = this.props
    if (!page || !comments || !comments.length) return null
    if (page.loading) return <Loader />

    return (
      <ul>
        {comments.map((id) => (
          <li key={id}>
            <Comment id={id} />
          </li>
        ))}
      </ul>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    comments: commentsPageSelector(state, ownProps),
    page: pageSelector(state, ownProps)
  }),
  { loadCommentsPage }
)(CommentsPage)
