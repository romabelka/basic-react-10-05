import React, {Component} from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const MONTHS = [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ];
const WEEKDAYS_LONG = [ 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const WEEKDAYS_SHORT = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

export default class DatePicker extends Component {
    state = {
        from: null,
        to: null
    };

    render() {
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };
        return (
            <div className="articles__datepicker">
                <div className="datepicker">
                    <DayPicker locale="ru"
                               className="Selectable"
                               modifiers={modifiers}
                               onDayClick={this.handleDayClick.bind(this)}
                               selectedDays={[from, { from, to }]}
                               months={MONTHS}
                               weekdaysLong={WEEKDAYS_LONG}
                               weekdaysShort={WEEKDAYS_SHORT}
                               firstDayOfWeek={0} />
                    {from && to && (
                    <div className="datepicker__value">
                        <button className="datepicker__reset link btn float-right" onClick={this.handleResetClick.bind(this)}>сброс</button>
                        <span>Выбранный диапазон: {from.toLocaleDateString()} to {to.toLocaleDateString()}</span>
                    </div>
                    )}
                </div>
            </div>
        )
    }

    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState( range );
    }

    handleResetClick() {
        this.setState({
            from: null,
            to: null
        })
    }
}