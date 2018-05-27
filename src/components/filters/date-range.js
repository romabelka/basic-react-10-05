import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { updateFilteredByDateArticlesIds } from '../../ac'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  state = {
    from: null,
    to: null
  }

  handleDayClick = (day) => {
    this.setState(DateUtils.addDayToRange(day, this.state), () => {
      const { from, to } = this.state
      if (from != null && to != null) {
        const filteredIds = this.props.articles
          .filter((article) => {
            const articleDate = new Date(article.date).getTime()
            return articleDate >= from.getTime() && articleDate <= to.getTime()
          })
          .map((article) => article.id)
        this.props.dispatch(updateFilteredByDateArticlesIds(filteredIds, true))
      } else {
        this.props.dispatch(updateFilteredByDateArticlesIds([], false))
      }
    })
  }

  getDateBoundaries() {
    const articles = this.props.articles
    const sortedArticles = articles.sort((a1, a2) => {
      return new Date(a1.date) - new Date(a2.date)
    })
    return [
      new Date(sortedArticles[0].date),
      new Date(sortedArticles[articles.length - 1].date)
    ]
  }

  render() {
    const { from, to } = this.state
    const selectedRange =
      from && to && `${from.toDateString()} - ${to.toDateString()}`
    const dateBoundaries = this.getDateBoundaries()
    const earliestDate = dateBoundaries[0]
    const latestDate = dateBoundaries[1]

    return (
      <div className="date-range">
        <DayPicker
          selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.handleDayClick}
          initialMonth={earliestDate}
          fromMonth={earliestDate}
          toMonth={latestDate}
        />
        {selectedRange}
      </div>
    )
  }
}

export default connect()(DateRange)
