import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../ac'
import './style.css'
import Loader from '../common/loader'

class CommentForm extends Component {
  static propTypes = {}

  state = {
    user: '',
    text: ''
  }

  render() {
    const { loading } = this.props

    return (
      <form onSubmit={this.handleSubmit} className="form-comments">
        <div className="form-group">
          <label htmlFor="user">User: </label>
          <input
            value={this.state.user}
            onChange={this.handleChange('user')}
            className={this.getClassName('user')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="user">Comment: </label>
          <textarea
            onChange={this.handleChange('text')}
            className={this.getClassName('text')}
            value={this.state.text}
            ref={this.areaRef}
          />
        </div>
        <button
          type="submit"
          className={`btn btn-sm btn-primary ${
            loading ? 'ld-ext-right running' : ''
          }`}
          disabled={!this.isValidForm()}
        >
          Submit {loading && <div className="ld ld-ring ld-spin" />}
        </button>
      </form>
    )
  }

  areaRef = (ref) => {
    ref && ref.addEventListener('keydown', this.submitForm)
  }

  submitForm = (e) => {
    if (e.keyCode == 13 && e.metaKey) {
      this.handleSubmit()
    }
  }

  handleSubmit = (ev) => {
    ev && ev.preventDefault()
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
