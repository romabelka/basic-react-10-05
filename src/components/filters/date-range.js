import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { showArticlesByDate } from '../../ac'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  static propTypes = {
    articles: PropTypes.object.isRequired
  }

  state = {
    from: null,
    to: null
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(() => range, () => this.props.showArticlesByDate(this.state))
  }

  render() {
    const { from, to } = this.state
    const selectedRange =
      from && to && `${from.toDateString()} - ${to.toDateString()}`
    return (
      <div className="date-range">
        <DayPicker
          selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.handleDayClick}
        />
        {selectedRange}
      </div>
    )
  }
}

export default connect(
  (state) => ({
    articles: state.articles
  }),
  { showArticlesByDate }
)(DateRange)
