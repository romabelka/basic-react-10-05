import React, { Component } from 'react'
import Loader from '../components/common/loader'
import Comment from '../components/comment'
import { connect } from 'react-redux'
import { loadCommentsPage } from '../ac'
import { commentsPageSelector } from '../selectors'

class CommentsPage extends Component {
  constructor(props) {
    super(props)
    const { page, loadCommentsPage } = this.props
    console.log('component props', this.props)
    if (!page || (!page.loaded && !page.loading)) loadCommentsPage(page)
  }
  render() {
    return <div>{this.getComments()}</div>
  }

  getComments() {
    const { page } = this.props
    if (!page || !page.comments || !page.comments.length) return null
    if (page.loading) return <Loader />

    return (
      <ul>
        {page.comments.map((id) => (
          <li key={id}>
            <Comment id={id} />
          </li>
        ))}
      </ul>
    )
  }
}

export default connect(
  (state, ownProps) => {
    console.log('=== ownProps', ownProps)
    return {
      page: commentsPageSelector(state, ownProps)
    }
  },
  { loadCommentsPage }
)(CommentsPage)
