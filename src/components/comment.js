import React, { PureComponent } from 'react'

class Comment extends PureComponent {
    render() {
        const { comment, isOpen } = this.props
        return (
            <div>
                <a name={comment.id}>{comment.user}</a>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { isOpen, comment } = this.props

        if (!isOpen) return null

        return (
            <section>
                {comment.text}
            </section>
        )
    }

    toggleOpen = () => this.props.toggleOpen(this.props.comment.id)
}

export default Comment