import React from 'react'
import Article from './article'
import accordion from '../decorators/accordion'

function ArticleList(props) {
    const articleElements = props.articles
        .filter(article => {
            let { from, to} = props.filter;
            if (!from)
                return true;

            let date = new Date(article.date);
            
            return (date >= from && (!to || date <= to));
        })
        .map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === props.openItemId}
                     toggleOpen={props.toggleOpenItem}
            />
        </li>)

    return (
        <ul>
            {articleElements}
        </ul>
    )
}

export default accordion(ArticleList)