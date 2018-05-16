import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import ArticleList from './components/article-list'
import Chart from './components/chart'
import UserForm from './components/user-form'
import Select from 'react-select'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css';

class App extends Component {
    static defaultProps = {
        numberOfMonths: 2,
    };
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.state = {
            selected: null,
            from: undefined,
            to: undefined
        }
    }

    resetDayPickerState() {
        this.setState({from: undefined, to: undefined})
    }

    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }

    handleResetClick() {
        this.setState(this.resetDayPickerState());
    }

    render() {
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };

        console.log('---', this.state)


        return (
            <div>
                <h1>Day picker</h1>
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
                        className="Selectable"
                        numberOfMonths={this.props.numberOfMonths}
                        selectedDays={[from, { from, to }]}
                        modifiers={modifiers}
                        onDayClick={this.handleDayClick}
                    />
                </div>



                {/*<UserForm />*/}
                <div>
                    <h1>Multi Select</h1>
                    <Select 
                        defaultValue={[this.options[1], this.options[2]]}
                        isMulti
                        options={this.options} 
                        value={this.state.selected} 
                        onChange={this.changeSelection} />
                </div>
                <div>
                    <h1>Article list</h1>
                    <ArticleList articles={this.props.articles} ref={this.setArticleListRef} />
                </div>
                
                {/*<Chart articles={this.props.articles} />*/}

            </div>
        )
    }

    get options() {
        return this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
    }

    changeSelection = selected => this.setState({ selected })

    setArticleListRef = (articleList) => {
        console.log('---', 'article list', findDOMNode(articleList))
    }
}

export default App
