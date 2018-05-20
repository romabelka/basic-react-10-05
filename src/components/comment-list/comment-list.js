import React, { Component } from 'react'
import CSSTransition from 'react-addons-css-transition-group'
import PropTypes from 'prop-types'
import Comment from '../comment/comment'
import toggleOpen from '../../decorators/toggleOpen'
import './comment-list.css'

export class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
      })
    ),
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func.isRequired
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button className="test__comment-button" onClick={toggleOpen}>
          {text}
        </button>
        <CSSTransition
          transitionAppear
          transitionName="comments"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          transitionAppearTimeout={1000}
        >
          {this.getBody()}
        </CSSTransition>
      </div>
    )
  }

  getBody() {
    const { comments, isOpen } = this.props
    if (!isOpen) return null

    const body =
      comments && comments.length ? (
        <ul>
          {comments.map((comment) => (
            <li className="test__comment-list_item" key={comment.id}>
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
