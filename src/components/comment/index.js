import React, { Component } from 'react'
import CSSTransition from 'react-addons-css-transition-group'
import PropTypes from 'prop-types'
import './comment.css'

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string,
      text: PropTypes.string.isRequired
    }).isRequired
  }

  render() {
    const { comment } = this.props
    return (
      <CSSTransition
        transitionAppear
        transitionName="comment"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        transitionAppearTimeout={1000}
      >
        <div className="test__CommentList-body_item">
          {comment.text} <b>by {comment.user}</b>
        </div>
      </CSSTransition>
    )
  }
}

export default Comment
