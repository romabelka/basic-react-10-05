import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../ac'
import './style.css'

class CommentForm extends Component {
  static propTypes = {}

  state = {
    user: '',
    text: ''
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-comments">
        <div className="form-group">
          <label for="user">User: </label>
          <input
            value={this.state.user}
            onChange={this.handleChange('user')}
            className={this.getClassName('user')}
          />
        </div>
        <div className="form-group">
          <label for="user">Comment: </label>
          <textarea
            onChange={this.handleChange('text')}
            className={this.getClassName('text')}
          >
            {this.state.text}
          </textarea>
        </div>
        <input
          type="submit"
          value="submit"
          className="btn btn-primary"
          disabled={!this.isValidForm()}
        />
      </form>
    )
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.addComment(this.state)
    this.setState({
      user: '',
      text: ''
    })
  }

  isValidForm = () => ['user', 'text'].every(this.isValidField)

  isValidField = (type) => this.state[type].length >= limits[type].min

  getClassName = (type) =>
    this.isValidField(type) ? 'form-control' : 'form-control form-input__error'

  handleChange = (type) => (ev) => {
    const { value } = ev.target
    if (value.length > limits[type].max) return
    this.setState({
      [type]: value
    })
  }
}

const limits = {
  user: {
    min: 10,
    max: 50
  },
  text: {
    min: 10,
    max: 50
  }
}

export default connect(
  null,
  (dispatch, ownProps) => ({
    addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
  })
)(CommentForm)
