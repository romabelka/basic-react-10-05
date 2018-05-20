import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import toggleOpen from '../../decorators/toggleOpen'
import CSSTransition from 'react-addons-css-transition-group'
import './comment.css'

export class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func.isRequired
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    const className = isOpen
      ? 'test__comment_btn_close'
      : 'test__comment_btn_open'
    return (
      <div>
        <button onClick={toggleOpen} className={className}>
          {text}
        </button>
        <CSSTransition
          transitionName="comment-list"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.getBody()}
        </CSSTransition>
      </div>
    )
  }

  getBody() {
    const { comments, isOpen } = this.props
    if (!isOpen) return null

    const body = comments.length ? (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="test__comment-list_item">
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <h3>No comments yet</h3>
    )

    return <div>{body}</div>
  }
}

export default toggleOpen(CommentList)
