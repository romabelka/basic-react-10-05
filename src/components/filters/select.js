import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { selectedArticle } from '../../ac'


class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  state = {
    selected: null
  }

  //handleChange = (selected) => this.setState({ selected })
  handleChange = () => {
    const { selectedArticle, filters } = this.props
    selectedArticle(filters.selected)
  }

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.state.selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect ((state) => ({
  articles: state.articles,
  selected: state.filters.selected
}), selectedArticle)(SelectFilter)
