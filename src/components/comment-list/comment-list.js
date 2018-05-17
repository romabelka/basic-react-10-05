import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func.isRequired
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen} className="toggle-comment-button">
          {text}
        </button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const { comments, isOpen } = this.props
    if (!isOpen) return null

    const body =
      comments && comments.length ? (
        <ul className="comment-list">
          {comments.map((comment) => (
            <li key={comment.id} className="comment-list_item">
              <Comment comment={comment} />
            </li>
          ))}
        </ul>
      ) : (
        <h3 className="no-comments-title">No comments yet</h3>
      )

    return <div>{body}</div>
  }
}

export default toggleOpen(CommentList)
