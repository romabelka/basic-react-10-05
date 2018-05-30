import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeCommentText } from '../ac'

class CommentText extends Component {
  static propTypes = {
    text: PropTypes.string,
    changeCommentText: PropTypes.func
  }

  render() {
    const { text } = this.props
    return (
      <p>
        <label>
          <span>Text comment: </span>
          <textarea value={text} onChange={this.handleChange} />
        </label>
      </p>
    )
  }

  handleChange = (ev) => {
    const { changeCommentText } = this.props
    const value = ev.target.value

    changeCommentText(value)
  }
}

export default connect(null, { changeCommentText })(CommentText)
