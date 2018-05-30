import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../ac'

class CommentForm extends Component {
  state = {
    user: '',
    text: ''
  }
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Username"
          onChange={this.handleUsername}
          value={this.state.user}
        />

        <textarea
          placeholder="Comment text"
          onChange={this.handleComment}
          value={this.state.text}
        />

        <button type="button" onClick={this.addComment}>
          Add comment
        </button>
      </form>
    )
  }

  addComment = () => {
    this.setState({ user: '', text: '' })
    this.props.addComment({ articleId: this.props.articleId, ...this.state })
  }

  handleUsername = (event) => {
    this.setState({ user: event.target.value })
  }

  handleComment = (event) => {
    this.setState({ text: event.target.value })
  }
}

export default connect(null, { addComment })(CommentForm)
