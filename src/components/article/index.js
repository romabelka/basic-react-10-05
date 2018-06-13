import React, { Component } from 'react'
import CSSTransition from 'react-addons-css-transition-group'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { articleSelector, loadingArticlesSelector } from '../../selectors'
import CommentList from '../comment-list'
import Loader from '../common/loader'
import { deleteArticle, loadArticle } from '../../ac'
import './article.css'
import { i18n } from '../../context/i18n'

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

  componentDidUpdate() {
    this.checkAndLoadArticle()
  }

  constructor(props) {
    super(props)
    this.checkAndLoadArticle()
  }

  render() {
    const { article, isOpen } = this.props
    if (!article) return null

    return (
      <div>
        <h2>{article.title}</h2>
        <button onClick={this.toggleOpen} className="test__article_btn">
          {i18n(isOpen ? 'close' : 'open')}
        </button>
        <button onClick={this.handleDelete}>{i18n('delete')}</button>
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

  checkAndLoadArticle() {
    const { loadArticle, article, id, loading } = this.props
    if (!loading && (!article || (!article.text && !article.loading)))
      loadArticle(id)
  }
}

export default connect(
  (state, ownProps) => ({
    article: articleSelector(state, ownProps),
    loading: loadingArticlesSelector(state)
  }),
  { deleteArticle, loadArticle }
)(Article)
