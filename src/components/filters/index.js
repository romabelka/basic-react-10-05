import React, { Component } from 'react'
import DateRange from './date-range'
import PropTypes from 'prop-types'
import SelectFilter from './select'

class Filters extends Component {
  static propTypes = {
    articles: PropTypes.array
  }

  render() {
    return (
      <div>
        <SelectFilter articles={this.props.articles} />
        <DateRange />
      </div>
    )
  }
}

export default Filters
