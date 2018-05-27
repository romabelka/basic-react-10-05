import React, { Component } from 'react'
import DateRange from './date-range'
import SelectFilter from './select'
import { connect } from 'react-redux'

class Filters extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <SelectFilter articles={this.props.articles} />
        <DateRange articles={this.props.articles} />
      </div>
    )
  }
}

export default connect((state) => ({
  articles: state.articles
}))(Filters)
