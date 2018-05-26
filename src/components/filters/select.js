import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { showArticles } from '../../ac' // Action creator

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.object.isRequired
  }

  state = {
    selected: null
  }

  handleChange = (selected) => {
    const { showArticles } = this.props
    this.setState({ selected })

    showArticles(selected)
  }

  get options() {
    return this.props.articles.articlesList.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  get value() {
    const { selected } = this.state
    const articlesList = this.props.articles.articlesList
    return selected
      ? selected.filter((value) =>
          articlesList.find((art) => art.id === value.value)
        )
      : selected
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.value}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect(
  (state) => ({
    articles: state.articles
  }),
  { showArticles }
)(SelectFilter)
