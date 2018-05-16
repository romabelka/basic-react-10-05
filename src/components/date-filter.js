import React, {Component} from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class DateFilter extends Component {
    constructor(props) {
        super(props)

        this.state = this.getInitialState()
        this.handleDayClick = this.handleDayClick.bind(this)
        this.resetDateRange = this.resetDateRange.bind(this)
    }

    getInitialState() {
        return {
            from: undefined,
            to: undefined
        }
    }

    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)
    }

    resetDateRange() {
        this.setState(this.getInitialState)
    }

    render() {
        const { from, to } = this.state

        return (
            <div className = 'date-filter'>
                <p>
                    {!from && !to && 'No date range is currently selected.'}
                    {from && !to && 'Please pick the end date.'}
                    {from && to && `The range from ${from.toLocaleDateString()}
                    to ${to.toLocaleDateString()} is selected. `}
                    {from && to && <button onClick={this.resetDateRange}>Reset Date Range</button>}
                </p>
                <DayPicker selectedDays = {[from, { from, to }]}
                        onDayClick={this.handleDayClick} />
            </div>
        )
    }
}

export default DateFilter