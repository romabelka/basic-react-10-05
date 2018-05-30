import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../../ac'
import { selectArticlesSelector } from '../../selectors'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  handleChange = (selected) => {
    this.props.changeSelection(selected)
  }

  render() {
    return (
      <Select
        options={this.props.articles}
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
    articles: selectArticlesSelector(state)
  }),
  { changeSelection }
)(SelectFilter)
