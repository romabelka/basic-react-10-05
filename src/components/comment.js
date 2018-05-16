import React, {Component } from 'react'

class Comment extends Component {
    render() {
        const { article, isOpen} = this.props
        return (
            <div>
                {this.getBody()}
            </div>
        )
    }


    getBody() {
        const { isOpen, article } = this.props

        if (!isOpen) return null

        return (
            <section>
                {article.comments}
            </section>
        )
    }

    commentsOpen = () => this.props.commentsOpen(this.props.article.id)
}


export default Comment
