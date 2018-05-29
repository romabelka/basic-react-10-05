import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../../ac'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.object.isRequired
  }

  handleChange = (selected) => {
    this.props.changeSelection(selected)
  }

  get options() {
    return Object.keys(this.props.articles).reduce(
      (acc, key) => [
        ...acc,
        {
          label: this.props.articles[key].title,
          value: key
        }
      ],
      []
    )
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.props.selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect(
  (state) => ({
    selected: state.filters.selected,
    articles: state.articles
  }),
  { changeSelection }
)(SelectFilter)
