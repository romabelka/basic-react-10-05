import React, { PureComponent } from 'react'
import CommentList from './comment-list'

class Article extends PureComponent {
    render() {
        const { article, isOpen } = this.props
        return (
            <div>
                <h2 ref = {this.setTitleRef}>
                    {article.title}
                </h2>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
                <CommentList comments={article.comments} />
            </div>
        )
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

    setTitleRef = title => console.log('---', title)

    toggleOpen = () => this.props.toggleOpen(this.props.article.id)
}

export default Article