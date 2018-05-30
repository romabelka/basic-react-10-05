import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeCommentUser } from '../ac'

class CommentUser extends Component {
  static propTypes = {
    user: PropTypes.string,
    changeCommentUser: PropTypes.func
  }

  render() {
    const { user } = this.props
    return (
      <p>
        <label>
          <span>Name: </span>
          <input type="text" value={user} onChange={this.handleChange} />
        </label>
      </p>
    )
  }

  handleChange = (ev) => {
    const { changeCommentUser } = this.props
    const value = ev.target.value

    changeCommentUser(value)
  }
}

export default connect(null, { changeCommentUser })(CommentUser)
