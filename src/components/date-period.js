import React, {Component} from 'react'
import DayPicker, {DateUtils} from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import './date-period.css'


class DatePeriod extends Component {
    static defaultProps = {
        numberOfMonths: 2,
    }

    constructor(props) {
        super(props);
        this.state = DatePeriod.getInitialState();
    }

    static getInitialState() {
        return {
            from: undefined,
            to: undefined,
        };
    }

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }

    handleResetClick = () => {
        this.setState(DatePeriod.getInitialState());
    }

    render() {
        const {from, to} = this.state;
        const modifiers = {start: from, end: to};

        return (
            <div>
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                    {from &&
                    to && (
                        <button className="link" onClick={this.handleResetClick}>
                            Reset
                        </button>
                    )}
                </p>
                <DayPicker
                    className='Selectable'
                    numberOfMonths={this.props.numberOfMonths}
                    selectedDays={[from, {from, to}]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />
            </div>
        );
    }
}

export default DatePeriod;
