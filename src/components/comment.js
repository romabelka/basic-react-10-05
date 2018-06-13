import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createCommentSelector } from '../selectors'
import { i18n } from '../context/i18n'

function Comment({ comment }) {
  return (
    <div>
      {comment.text}{' '}
      <b>
        {i18n('author')} {comment.user}
      </b>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string
  }).isRequired
}

const createMapStateToProps = () => {
  const commentSelector = createCommentSelector()

  return (state, ownProps) => ({
    comment: commentSelector(state, ownProps)
  })
}

export default connect(createMapStateToProps)(Comment)
