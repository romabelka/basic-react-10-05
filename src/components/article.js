import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CommentList from './comment-list'

class Article extends PureComponent {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      comments: PropTypes.array
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func.isRequired
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
        <h2 ref={this.setTitleRef}>{article.title}</h2>
        <button onClick={this.toggleOpen}>{isOpen ? 'close' : 'open'}</button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const { article, isOpen } = this.props
    if (!isOpen) return null
    if (this.state.hasError) return <h3>Some Error</h3>

    return (
      <section>
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    )
  }

  setTitleRef = (title) => console.log('---', title)

  toggleOpen = () => this.props.toggleOpen(this.props.article.id)
}

export default Article
