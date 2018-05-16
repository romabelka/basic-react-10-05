import React, {Component} from 'react'
import Article from './article'
import accordion from '../decorators/accordion'

function ArticleList(props) {
    const articleElements = props.articles.map(article => <li key={article.id}>
        <Article article={article}
                 isOpen={article.id === props.openItemId}
                 toggleOpenItem={props.toggleOpenItem}
        />
    </li>)

    return (
        <ul>
            {articleElements}
        </ul>
    )
}

export default accordion(ArticleList)