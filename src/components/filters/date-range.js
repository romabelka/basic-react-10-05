import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { updateFilterDateRange } from '../../ac'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  static propTypes = {
    from: PropTypes.object,
    to: PropTypes.object,
    updateFilterDateRange: PropTypes.func
  }

  handleDayClick = (day) => {
    this.props.updateFilterDateRange(DateUtils.addDayToRange(day, this.props))
  }

  render() {
    const { from, to } = this.props

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
    from: state.filters.from,
    to: state.filters.to
  }),
  {
    updateFilterDateRange
  }
)(DateRange)
