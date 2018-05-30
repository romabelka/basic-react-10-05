import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../ac'

class CommentForm extends Component {
  state = {
    user: undefined,
    text: undefined
  }
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Username"
          onChange={this.handleUsername}
        />

        <textarea placeholder="Comment text" onChange={this.handleComment} />

        <button type="button" onClick={this.addComment}>
          Add comment
        </button>
      </form>
    )
  }

  addComment = () => {
    this.setState({
      user: '',
      text: ''
    })
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
