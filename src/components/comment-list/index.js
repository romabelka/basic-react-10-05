import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import CommentForm from '../comment-form'
import toggleOpen from '../../decorators/toggleOpen'
import { addComment } from '../../ac'
import { connect } from 'react-redux'
import './style.css'

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  static propTypes = {
    articleId: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen} className="test__comment-list--btn">
          {text}
        </button>
        <CSSTransition
          transitionName="comments"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.getBody()}
        </CSSTransition>
      </div>
    )
  }

  getBody() {
    const { comments, isOpen } = this.props
    if (!isOpen) return null

    return (
      <div className="test__comment-list--body comment-list--body">
        {comments.length ? (
          this.getComments()
        ) : (
          <h3 className="test__comment-list--empty">No comments yet</h3>
        )}
        <CommentForm articleId={this.props.articleId} />
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
    comments: state.articles[ownProps.articleId].comments
  }),
  { addComment }
)(toggleOpen(CommentList))
