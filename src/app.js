import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import ArticleList from './components/article-list'
import Chart from './components/chart'
import UserForm from './components/user-form'
import Select from 'react-select'
import DataPicker from './components/datapicker';
import 'react-day-picker/lib/style.css';

class App extends Component {
    state = {
        selected: null,
        filter: {
            // from: new Date('0001-01-01T00:00:00.000Z'),
            from: null,
            to: null,
        }
    }

    render() {
        console.log('---', this.state)
        return (
            <div>
                <UserForm />
                <Select options={this.options} value={this.state.selected} onChange={this.changeSelection} />
                <DataPicker changeFilter={this.changeFilter} />
                <ArticleList filter={this.state.filter} articles={this.props.articles} ref={this.setArticleListRef} />
                <Chart articles={this.props.articles} />
            </div>
        )
    }

    get options() {
        return this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
    }

    changeFilter = filter => this.setState({ ...this.state, filter })

    changeSelection = selected => this.setState({ ...this.state, selected })

    setArticleListRef = (articleList) => {
        console.log('---', 'article list', findDOMNode(articleList))
    }
}

export default App
