import React, {Component} from 'react'
import ReactDayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'


export default class DayPicker extends Component {
    state = {
        from: null,
        to: null
    }

    render () {
        const {from, to} = this.state;
        return (
            <div style = {{textAlign: 'center'}}>
                <h5>
                    {from || to ? 'Selected range: ' : 'Nothing selected'}
                    {from && `from ${this.state.from.toLocaleDateString()}`} {to && `to ${this.state.to.toLocaleDateString()}`}
                </h5>

                <ReactDayPicker
                    className = "Selectable"
                    onDayClick = {this.handleDayClick}
                    selectedDays = {[from, {from, to}]}
                />

                <style>{`
                .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                    background-color: #4a90e2 !important;
                    color: #fff;
                }

                .Selectable .DayPicker-Day {
                    border-radius: 0 !important;
                }`}</style>
            </div>
        )
    }

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }
}