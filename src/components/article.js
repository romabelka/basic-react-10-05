import React, { PureComponent } from 'react'
import CommentList from './comment-list'

class Article extends PureComponent {
    render() {
        const { article, isOpen } = this.props
        return (
            <div>
                <h2 ref={this.setTitleRef}>
                    {article.title}
                </h2>
                <h5><sub>{this.getDate()}</sub></h5>
                <button onClick={this.toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
                {this.getComments()}
            </div>
        )
    }

    getDate() {
        let date = new Date(this.props.article.date);
        return date.toString();
    }

    getBody() {
        const { isOpen, article } = this.props

        if (!isOpen) return null

        return (
            <section>
                {article.text}
            </section>
        )
    }

    getComments() {
        const { isOpen, article } = this.props
        let comments = article.comments ? article.comments : [];

        if (isOpen)
            return <CommentList comments={comments} />
        else
            return <div>All comments: {comments.length}</div>;
    }

    setTitleRef = title => console.log('---', title)

    toggleOpen = () => this.props.toggleOpen(this.props.article.id)
}

export default Article;