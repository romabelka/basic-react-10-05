import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitComment } from '../../ac'
import PropTypes from 'prop-types'

class Form extends Component {
  static propTypes = {
    parent: PropTypes.string.isRequired
  }

  state = {
    user: '',
    text: ''
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <label>
          Имя
          <input
            type="text"
            name="user"
            id="user"
            value={this.state.user}
            placeholder="Введите имя"
          />
        </label>
        <label>
          Текст комментария
          <textarea
            name="text"
            id="text"
            value={this.state.text}
            placeholder="Введите комментарий"
          />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    )
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitComment({ parent: this.props.parent, ...this.state })
    this.setState({ user: '', text: '' })
  }
}

export default connect(null, { submitComment })(Form)
