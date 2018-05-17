import React, { PureComponent } from 'react'
import toggleOpen from '../decorators/toggle-open'

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
            </div>
        )
    }

    getBody() {
        const { isOpen, article, showComments, isShowComments } = this.props

        if (!isOpen) return null

        return (
            <section>
                <div>
                    {article.text}
                </div>
                <button onClick={showComments}>Comments</button>
                {isShowComments && this.getComments()}
            </section>
        )
    }

    getComments() {
        const { article } = this.props
        return (
            <ul>
                {article.comments.map(comment =>
                    (<li>
                        {comment.text}
                    </li>)
                )}
            </ul>
        )
    }

    setTitleRef = title => console.log('---', title)

    toggleOpen = () => this.props.toggleOpen(this.props.article.id)
}

export default toggleOpen(Article)