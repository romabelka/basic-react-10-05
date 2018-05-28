import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

class SelectFilter extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired
  }

  state = {
    selected: null
  }

  handleChange = (selected) => {
    this.setState({ selected })
    this.props.onChange(selected)
  }

  render() {
    return (
      <Select
        options={this.props.options}
        value={this.state.selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default SelectFilter
