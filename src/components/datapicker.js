import React, {Component} from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';



export default class MyForm extends Component {
  static defaultProps = {
    numberOfMonths: 2,
  };
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    };
  }
  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }
  handleResetClick() {
    this.setState(this.getInitialState());
  }
  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    const options = {year: 'numeric',  month: 'long',  day: 'numeric'};
    return (
      <div className="RangeExample">
        <p>
          {!from && !to && 'Выберите первый день'}
          {from && !to && 'Выберите последний день'}
          {from &&
            to &&
            `Выбранный диапазон дат: с  ${from.toLocaleDateString("ru", options)} по
                ${to.toLocaleDateString("ru", options)}`}{' '}
          {from &&
            to && (
              <button className="link" onClick={this.handleResetClick}>
                Сбросить
              </button>
            )}
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
    }
