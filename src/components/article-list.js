import React from 'react';
import Article from './article';
import accordion from '../decorators/accordion';

function ArticleList(props) {
	const articleElements = props.articles.map(article => {
		return (
			<li	key={article.id}
                className="article">
				<Article article={article}
                         isOpen={article.id === props.openItemId}
                         toggleOpen={props.toggleOpenItem}
				/>
			</li>
		)
	});
	return (
		<ul>
			{articleElements}
        </ul>
	)
}

export default accordion(ArticleList);