import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentUser from './comment-user'
import CommentText from './comment-text'

class CommentForm extends Component {
  static propTypes = {
    comment: PropTypes.object
  }

  render() {
    return (
      <form action="#" method="POST">
        <CommentUser user={this.props.comment.user} />
        <CommentText text={this.props.comment.text} />
        <button>add comment</button>
      </form>
    )
  }
}

export default connect((state) => ({
  comment: state.comment
}))(CommentForm)
