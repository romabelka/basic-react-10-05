import React, {Component} from 'react'
import { findDOMNode } from 'react-dom'
import ArticleList from './components/article-list'
import Chart from './components/chart'
import UserForm from './components/user-form'

class App extends Component {
    render() {
        return (
            <div>
                <UserForm />
                <ArticleList articles = {this.props.articles} ref = {this.setArticleListRef}/>
                <Chart articles = {this.props.articles}/>
            </div>
        )
    }

    setArticleListRef = (articleList) => {
        console.log('---', 'article list', findDOMNode(articleList))
    }
}

export default App
