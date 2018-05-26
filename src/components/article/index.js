import React, { PureComponent } from 'react'
import CSSTransition from 'react-addons-css-transition-group'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentList from '../comment-list'
import { deleteArticle } from '../../ac'
import './article.css'

class Article extends PureComponent {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      comments: PropTypes.array
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func.isRequired,
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

  render() {
    const { article, isOpen } = this.props
    return (
      <div>
        <h2>{article.title}</h2>
        <button onClick={this.toggleOpen} className="test__article_btn">
          {isOpen ? 'close' : 'open'}
        </button>
        <button onClick={this.handleDelete}>delete me</button>
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

    return (
      <section className="test__article_body">
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    )
  }

  toggleOpen = () => this.props.toggleOpen(this.props.article.id)

  handleDelete = () => {
    const { deleteArticle, article } = this.props
    deleteArticle(article.id)
  }
}

// 1 arg - mapStateToProps, 2 arg - mapDispatchToProps
export default connect(null, { deleteArticle })(Article)
