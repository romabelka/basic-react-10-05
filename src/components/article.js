import React, { PureComponent } from 'react';
import CommentList from './comment-list';

class Article extends PureComponent {
	render() {
		const { article, isOpen} = this.props;
		return (
			<div>
				<button onClick={this.toggleOpen}
						className="btn float-right">
					    {isOpen ? 'закрыть' : 'открыть'}
				</button>
                <h2 className="sub-header">
                    {article.title}
                </h2>
                {this.getBody()}
			</div>
		)
	}

	getBody() {
		const { isOpen, article } = this.props;

		if (!isOpen) return null;

		return (
			<section>
                {article.text}
                {article.comments && <CommentList comments={article.comments}/>}
			</section>
		)
	}

	toggleOpen = () => this.props.toggleOpen(this.props.article.id)
}

export default Article;