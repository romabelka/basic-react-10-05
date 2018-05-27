import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { updateFilteredByTitleArticlesIds } from '../../ac'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  state = {
    selected: null
  }

  handleChange = (selected) => {
    const selectedIds = selected.map((selectedArticle) => selectedArticle.value)
    const filterIsApplied = selectedIds.length > 0
    this.props.dispatch(
      updateFilteredByTitleArticlesIds(selectedIds, filterIsApplied)
    )
  }

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    const selected = this.props.articles
      .filter((article) => article.passesTitleFilter)
      .map((article) => ({ label: article.title, value: article.id }))

    return (
      <Select
        options={this.options}
        value={selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect()(SelectFilter)
