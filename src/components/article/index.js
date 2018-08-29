import React, { Component } from 'react'
import CSSTransition from 'react-addons-css-transition-group'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { articleSelector } from '../../selectors'
import CommentList from '../comment-list'
import Loader from '../common/loader'
import { deleteArticle, loadArticle } from '../../ac'
import i18n from '../i18n'
import './article.css'

class Article extends Component {
  static propTypes = {
    id: PropTypes.string,

    article: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
      comments: PropTypes.array
    }),
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
    deleteArticle: PropTypes.func
  }

  state = {
    hasError: false
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  constructor(props) {
    super(props)
    const { loadArticle, article, id } = this.props
    if (!article || (!article.text && !article.loading)) loadArticle(id)
  }

  render() {
    const { article, isOpen, t } = this.props
    if (!article) return null

    return (
      <div>
        <h2>
          {article.title}
          <button
            onClick={this.handleDelete}
            className="btn btn-link btn-delete"
          >
            {t('delete me')}
          </button>
        </h2>
        <CSSTransition
          transitionAppear
          transitionName="article"
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
    const { article, isOpen } = this.props
    if (!isOpen) return null
    if (this.state.hasError) return <h3>Some Error</h3>
    if (article.loading) return <Loader />

    return (
      <section className="test__article_body">
        {article.text}
        <CommentList article={article} />
      </section>
    )
  }

  toggleOpen = () => this.props.toggleOpen(this.props.article.id)

  handleDelete = () => {
    const { deleteArticle, article } = this.props
    deleteArticle(article.id)
  }
}

export default i18n(
  connect(
    (state, ownProps) => ({
      article: articleSelector(state, ownProps)
    }),
    { deleteArticle, loadArticle }
  )(Article)
)
