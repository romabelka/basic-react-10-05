import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'
import { connect } from 'react-redux'
import { changePeriodArticle } from '../../ac'
import PropTypes from 'prop-types'

class DateRange extends Component {
  static propTypes = {
    from: PropTypes.instanceOf(Date),
    to: PropTypes.instanceOf(Date)
  }

  handleDayClick = (day) => {
    const { changePeriodArticle } = this.props
    changePeriodArticle(DateUtils.addDayToRange(day, this.props))
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

const mapStateToProps = (state) => ({
  from: state.articles.filter.from,
  to: state.articles.filter.to
})

const mapDispatchToProps = {
  changePeriodArticle
}

export default connect(mapStateToProps, mapDispatchToProps)(DateRange)
