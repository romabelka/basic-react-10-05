import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './styles.css';

const getInitialState = () => ({
    from: undefined,
    to  : undefined,
});

export default class DaysRangePicker extends Component {
    state = getInitialState();

    render() {
        const { from, to } = this.state;
        const modifiers    = { start: from, end: to };

        const title       = this.getTitle(from, to);
        const resetButton = this.getResetButton(from, to);

        return (
            <div className="days-range-picker">
                <p>
                    {title}
                    {resetButton}
                </p>
                <DayPicker
                    className="Selectable"
                    numberOfMonths={this.props.numberOfMonths}
                    selectedDays={[from, { from, to }]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />
            </div>
        );
    }

    getTitle(from, to) {
        if (!from && !to) {
            return 'Please select the first day.';
        } else if (from && !to) {
            return 'Please select the last day.';
        } else if (from && to) {
            return `Selected from ${from.toLocaleDateString()} to ${to.toLocaleDateString()}  `;
        }
    };

    getResetButton(from, to) {
        if (from && to) {
            return (
                <button className="link" onClick={this.handleResetClick}>
                    Reset
                </button>
            );
        }
    };

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);

        this.setState(range);
    };

    handleResetClick = () => this.setState(getInitialState())
}