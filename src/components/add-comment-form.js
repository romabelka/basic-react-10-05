import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentHolder from '../entities/CommentHolder'
import { addComment } from '../ac'

class AddCommentForm extends Component {
  state = {
    user: '',
    text: ''
  }

  static propTypes = {
    commentHolder: PropTypes.instanceOf(CommentHolder).isRequired,
    addComment: PropTypes.func.isRequired
  }

  render() {
    return (
      <form>
        <label>
          User name:
          <input
            placeholder="User name"
            name="user"
            onChange={this.handleUserChange}
            value={this.state.user}
          />
        </label>
        <label>
          Comment :
          <textarea
            placeholder="Comment text"
            name="comment"
            onChange={this.handleCommentChange}
            value={this.state.text}
          />
        </label>
        <button type="button" onClick={this.handleAddClick}>
          add
        </button>
      </form>
    )
  }

  handleUserChange = (e) => {
    e.preventDefault()
    e.stopPropagation()

    this.setState({ user: e.target.value })
  }

  handleCommentChange = (e) => {
    e.preventDefault()
    e.stopPropagation()

    this.setState({ text: e.target.value })
  }

  handleAddClick = (e) => {
    e.preventDefault()
    e.stopPropagation()

    this.props.addComment(this.props.commentHolder, {
      ...this.state
    })

    this.setState({
      text: ''
    })
  }
}

export default connect(null, {
  addComment
})(AddCommentForm)
