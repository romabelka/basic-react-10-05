import React, {Component} from 'react'
import DayPicker, {DateUtils} from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import './style.css'

class UserDate extends Component {
    constructor (props) {
        super(props);
        this.dates = props.articles.map(article => new Date(article.date).getTime()).sort().map(ms => new Date(ms));
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
            from: this.dates[0],
            to: this.dates[this.dates.length - 1],
            pickerVisible: false
        };
        console.log(this.dates);
    }

    render () {
        const {from, to} = this.state;
        const modifiers = {start: from, end: to};

        return (
            <span>
                Date: <input value = {this.getDatesString()}
                             onClick = {this.togglePicker.bind(this)}
                             readOnly/>

                {this.state.pickerVisible
                    ? <DayPicker onDayClick = {this.handleDayClick}
                                 modifiers = {modifiers}
                                 selectedDays = {[from, {from, to}]}
                                 disabledDays = {[{
                                    before: this.dates[0],
                                    after: this.dates[this.dates.length - 1]
                                 }]}
                                 month={new Date(this.dates[0].setDate(1))}
                                 className = 'Selectable' />
                    : null}
            </span>
        );
    }

    togglePicker () {
        this.setState({
            pickerVisible: !this.state.pickerVisible
        })
    }

    handleDayClick (day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
        if (range.from && range.to) this.togglePicker();
    }

    getDatesString () {
        if (!this.state.from && !this.state.to && !this.state.pickerVisible) return 'click here';
        if (!this.state.from && !this.state.to && this.state.pickerVisible) return 'select dates';
        if (this.state.from && this.state.to) return `${this.state.from.toLocaleDateString()} — ${this.state.to.toLocaleDateString()}`;
        if (this.state.from) return `${this.state.from.toLocaleDateString()} —`;
        return `— ${this.state.to.toLocaleDateString()}`;
    }
}

export default UserDate;
