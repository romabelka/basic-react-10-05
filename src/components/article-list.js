import React, { Component } from 'react'
import Article from './article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {

    render() {
        const articleElements = this.props.articles.map(article => <li key = {article.id}>
            <Article article = {article}
                     isOpen = {article.id === this.props.openItemId}
                     toggleOpen = {this.props.toggleOpenItem(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default accordion(ArticleList)