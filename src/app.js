import React, {Component} from 'react'
import { findDOMNode } from 'react-dom'
import ArticleList from './components/article-list'
import Chart from './components/chart'
import UserForm from './components/user-form'
import Select from 'react-select'
import DaysRangePicker from './components/days-range-picker/index';

class App extends Component {
    state = {
        selected: null
    };

    render() {
        console.log('---', this.state);
        return (
            <div>
                <UserForm />
                <DaysRangePicker />
                <Select
                    options = {this.options}
                    value = {this.state.selected}
                    onChange = {this.changeSelection}
                    isMulti
                />
                <ArticleList articles = {this.props.articles} ref = {this.setArticleListRef}/>
                <Chart articles = {this.props.articles}/>
            </div>
        )
    }

    get options() {
        return this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
    };

    changeSelection = selected => this.setState({ selected });

    setArticleListRef = (articleList) => {
        console.log('---', 'article list', findDOMNode(articleList))
    }
}

export default App
