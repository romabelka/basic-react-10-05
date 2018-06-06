import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import CommentForm from '../comment-form'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'
import Loader from '../common/loader'
import {
  commentsLoadedSelector,
  loadedCommentListSelector,
  loadingCommentListSelector
} from '../../selectors'
import { loadAllComments } from '../../ac'
import { connect } from 'react-redux'

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  componentDidUpdate(oldProps) {
    const {
      isOpen,
      loadAllComments,
      article,
      loading,
      loaded,
      commentsLoaded
    } = this.props
    if (!oldProps.isOpen && isOpen && !commentsLoaded && !loading)
      loadAllComments(article.id)
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
      commentsLoaded,
      loading
    } = this.props
    if (!isOpen) return null
    if (loading) return <Loader />

    return (
      <div className="test__comment-list--body">
        {comments.length && commentsLoaded ? (
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
        {this.props.article.comments.map((id) => {
          return (
            <li key={id} className="test__comment-list--item">
              <Comment id={id} />
            </li>
          )
        })}
      </ul>
    )
  }
}

const createMapToProps = () => {
  const commentsLoaded = commentsLoadedSelector()

  return (state, ownProps) => ({
    comments: commentsLoaded(state, ownProps),
    loading: loadingCommentListSelector(state),
    loaded: loadedCommentListSelector(state)
  })
}

export default connect(createMapToProps, { loadAllComments })(
  toggleOpen(CommentList)
)
