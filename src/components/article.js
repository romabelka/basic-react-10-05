import React, { Component } from 'react'
import CommentList from './comment-list';

class Article extends Component {
    render() {
        const { article, isOpen } = this.props;
        return (
            <div>
                <h2 ref = {this.setTitleRef}>
                    {article.title}
                </h2>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { isOpen, article } = this.props;

        if (!isOpen) return null

        return (
            <div>
                <section>
                    {article.text}
                    <CommentList
                        comments = {article.comments || []}
                        id = {article.id}
                    />
                </section>
            </div>
        )
    }

    toggleOpen = () => {
        !this.props.isOpen ? this.props.toggleOpenItem(this.props.article.id) : this.props.toggleOpenItem(null); // Нормально пофиксил?)
    }
}

export default Article