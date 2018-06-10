import React, { Component } from 'react'
import Loader from '../components/common/loader'
import Comment from '../components/comment'
import { connect } from 'react-redux'
import { loadCommentsPage } from '../ac'
import {
  pageSelector,
  commentsPageSelector,
  loadingCommentsPageSelector
} from '../selectors'

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
    const { page, comments, loading } = this.props
    if (!page) return null
    if (loading) return <Loader />

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
    loading: loadingCommentsPageSelector(state, ownProps),
    comments: commentsPageSelector(state, ownProps),
    page: pageSelector(state, ownProps)
  }),
  { loadCommentsPage }
)(CommentsPage)
