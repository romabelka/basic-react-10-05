import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addComment } from '../../ac'

class CommentForm extends Component {
  static propTypes = {
    articleId: PropTypes.string.isRequired,
    addComment: PropTypes.func.isRequired
  }

  state = {
    commentText: '',
    author: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { author, commentText } = this.state
    const { addComment, articleId } = this.props

    addComment({ author, commentText, articleId })
  }

  handleChangeAuthor = (e) => {
    this.setState({ author: e.target.value })
  }

  handleChangeCommentText = (e) => {
    this.setState({ commentText: e.target.value })
  }

  render() {
    const { author, commentText } = this.state

    return (
      <form onSubmit={this.handleSubmit} style={{ padding: '25px' }}>
        <label>
          <div>Author:</div>
          <input
            type="text"
            onChange={this.handleChangeAuthor}
            value={author}
          />
        </label>
        <label>
          <div>Comment:</div>
          <textarea
            onChange={this.handleChangeCommentText}
            value={commentText}
          />
        </label>
        <div>
          <input type="submit" value="Add comment" />
        </div>
      </form>
    )
  }
}

export default connect(null, {
  addComment
})(CommentForm)
