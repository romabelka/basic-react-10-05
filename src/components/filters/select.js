import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { updateFilterIds } from '../../ac'

function createOptionShapeByArticle(article) {
  return {
    label: article.title,
    value: article.id
  }
}

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    selected: PropTypes.array.isRequired,
    updateFilterIds: PropTypes.func
  }

  handleChange = (selected) => {
    this.props.updateFilterIds(selected.map((select) => select.value))
  }

  get options() {
    return this.props.articles.map(createOptionShapeByArticle)
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
    articles: state.articles,
    selected: state.articles.reduce((acc, article) => {
      if (state.filters.ids.some((id) => article.id === id)) {
        acc.push(createOptionShapeByArticle(article))
      }

      return acc
    }, [])
  }),
  {
    updateFilterIds
  }
)(SelectFilter)
