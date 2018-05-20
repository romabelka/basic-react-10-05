import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Comment extends Component {
  static propTypes = {
    comment: PropTypes.shape({
      text: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      id: PropTypes.any
    })
  }

  render() {
    const { comment } = this.props
    return (
      <div>
        {comment.text} <b>by {comment.user}</b>
      </div>
    )
  }
}
