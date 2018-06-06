import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import CommentForm from '../comment-form'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'
import { loadComments } from '../../ac'
import {
  loadingCommentsSelector,
  isCommentsLoadedSelector
} from '../../selectors'
import { connect } from 'react-redux'
import Loader from '../common/loader'

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
    loadComments: PropTypes.func,
    isCommentsLoaded: PropTypes.bool,
    loading: PropTypes.bool
  }

  componentDidUpdate(oldProps) {
    const {
      isOpen,
      isCommentsLoaded,
      article,
      loadComments,
      loading
    } = this.props

    if (!oldProps.isOpen && isOpen && !loading && !isCommentsLoaded)
      loadComments(article.id)
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
    const {
      article: { comments = [], id },
      isOpen,
      loading,
      isCommentsLoaded
    } = this.props
    if (!isOpen) return null
    if (loading) return <Loader />

    return (
      <div className="test__comment-list--body">
        {comments.length && isCommentsLoaded ? (
          this.getComments()
        ) : (
          <h3 className="test__comment-list--empty">No comments yet</h3>
        )}
        <CommentForm articleId={id} />
      </div>
    )
  }

  getComments() {
    return (
      <ul>
        {this.props.article.comments.map((id) => (
          <li key={id} className="test__comment-list--item">
            <Comment id={id} />
          </li>
        ))}
      </ul>
    )
  }
}

const createMapStateToProps = () => {
  const isCommentsLoaded = isCommentsLoadedSelector()

  return (state, ownProps) => ({
    loading: loadingCommentsSelector(state),
    isCommentsLoaded: isCommentsLoaded(state, ownProps)
  })
}

export default toggleOpen(
  connect(createMapStateToProps, { loadComments })(CommentList)
)
