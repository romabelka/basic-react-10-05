import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import Comment from '../comment'
import CommentForm from '../comment-form'
import Loader from '../common/loader'
import toggleOpen from '../../decorators/toggleOpen'
import { loadArticleComments } from '../../ac'
import { Consumer as UserConsumer } from '../../context/user'
import i18n from '../i18n'
import './style.css'

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  componentWillReceiveProps({ isOpen, article, loadArticleComments }) {
    if (
      !this.props.isOpen &&
      isOpen &&
      !article.commentsLoading &&
      !article.commentsLoaded
    ) {
      loadArticleComments(article.id)
    }
  }

  render() {
    const { isOpen, toggleOpen, t } = this.props
    const text = t(isOpen ? 'hide comments' : 'show comments')
    return (
      <div>
        <button
          onClick={toggleOpen}
          className="test__comment-list--btn btn btn-primary"
        >
          {text}
        </button>
        <UserConsumer>{(username) => <h3>{username}</h3>}</UserConsumer>
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
      article: { comments, id, commentsLoading, commentsLoaded },
      isOpen,
      t
    } = this.props
    if (!isOpen) return null
    if (commentsLoading) return <Loader />
    if (!commentsLoaded) return null

    return (
      <div className="test__comment-list--body">
        {comments.length ? (
          this.getComments()
        ) : (
          <h3 className="test__comment-list--empty">{t('No comments yet')}</h3>
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

export default i18n(
  connect(
    null,
    { loadArticleComments }
  )(toggleOpen(CommentList))
)
