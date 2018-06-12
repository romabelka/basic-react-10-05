import React, { Component } from 'react'
import CSSTransition from 'react-addons-css-transition-group'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { articleSelector } from '../../selectors'
import CommentList from '../comment-list'
import Loader from '../common/loader'
import { deleteArticle, loadArticle } from '../../ac'
import { loadingArticlesSelector } from '../../selectors'
import './article.css'
import { translate } from '../../context/translate'

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

  componentDidMount() {
    const { loadArticle, article, id, loading } = this.props
    if (!loading && (!article || (!article.text && !article.loading)))
      loadArticle(id)
  }

  componentDidUpdate() {
    const { loadArticle, article, id, loading } = this.props
    console.log('---', 'update, loading:', loading)
    if (!loading && (!article || (!article.text && !article.loading)))
      loadArticle(id)
  }

  render() {
    const { article, isOpen } = this.props
    if (!article) return null

    return (
      <div>
        <h2>{article.title}</h2>
        <button onClick={this.toggleOpen} className="test__article_btn">
          {translate(isOpen ? 'close' : 'open')}
        </button>
        <button onClick={this.handleDelete}>{translate('delete me')}</button>
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
    if (this.state.hasError) return <h3>{translate('Some Error')}</h3>
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

export default connect(
  (state, ownProps) => ({
    article: articleSelector(state, ownProps),
    loading: loadingArticlesSelector(state)
  }),
  { deleteArticle, loadArticle }
)(Article)
