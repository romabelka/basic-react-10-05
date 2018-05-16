import React, {Component} from 'react'
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';


class DatePicker extends Component{

    constructor(props) {
        super(props)

        this.state = {
            from: undefined,
            to: undefined
        }
    }

    handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
}

render() {
    const {from, to} = this.state
    return (
        <div>
            <div className='range' >
                {!from && !to && 'Please select the first day.'}
                {from && !to && 'Please select the last day.'}
                {from && to && `Selected from ${from.toLocaleDateString()} to ${to.toLocaleDateString()}`}
            </div>
            <DayPicker
                selectedDays={[from, {from, to}]}
                onDayClick={this.handleDayClick}/>
        </div>
    )
    }
}

export default DatePicker