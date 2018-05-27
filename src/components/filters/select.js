import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelectedArticle } from '../../ac'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    selected: PropTypes.array,
    changeSelectedArticle: PropTypes.func
  }

  handleChange = (selected) => {
    this.props.changeSelectedArticle(selected)
  }

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    const { selected } = this.props

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

const mapStateToProps = (state) => ({
  articles: state.articles.items,
  selected: state.articles.filter.selected
})

const mapDispatchToProps = {
  changeSelectedArticle
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectFilter)
