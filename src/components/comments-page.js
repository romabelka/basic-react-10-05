import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Comment from './comment'
import Loader from './common/loader'
import { loadPageComments } from '../ac'
import {
  pageSelector,
  totalCountSelector,
  commentsByPageSelector
} from '../selectors'
import Pagination from './pagination'

const PER_PAGE = 5
const COMMENTS_ROUTE = '/comments/:page'

class CommentsPage extends Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    pager: PropTypes.object,
    comments: PropTypes.array
  }

  constructor(props) {
    super(props)

    const { page, loadPageComments, pager, comments } = props

    if (!pager || comments.length < PER_PAGE) {
      loadPageComments(page, PER_PAGE)
    }
  }

  render() {
    return <div>{this.getBody()}</div>
  }

  getBody() {
    const { pager, comments, total } = this.props

    if (!pager || pager.loading) return <Loader />

    return (
      <div className="test__comment-list--body">
        {comments.length ? (
          this.getComments()
        ) : (
          <h3 className="test__comment-list--empty">No comments yet</h3>
        )}
        <Pagination total={total} perPage={PER_PAGE} link={COMMENTS_ROUTE} />
      </div>
    )
  }

  getComments() {
    return (
      <ul>
        {this.props.comments.map((id) => (
          <li key={id} className="test__comment-list--item">
            <Comment id={id} />
          </li>
        ))}
      </ul>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    comments: commentsByPageSelector(state, ownProps),
    pager: pageSelector(state, ownProps),
    total: totalCountSelector(state)
  }),
  { loadPageComments }
)(CommentsPage)
