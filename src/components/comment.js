import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createCommentSelector, commentsLoadedSelector } from '../selectors'

class Comment extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  }

  render() {
    const { user, text } = this.props
    return (
      <div>
        {text} <b>by {user}</b>
      </div>
    )
  }
}

const createMapStateToProps = () => {
  const commentSelector = createCommentSelector()

  return (state, ownProps) => ({
    comments: commentsLoadedSelector()(state, ownProps),
    comment: commentSelector(state, ownProps)
  })
}

export default connect(createMapStateToProps)(Comment)
