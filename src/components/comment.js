import React, { PureComponent } from 'react'

class Comment extends PureComponent {
    render() {
        const { comment, isOpen } = this.props
        return (
            <div>
                <h2>
                    {comment.title}
                </h2>
                {/*<button onClick = {this.toggleOpen}>
                    {isOpen ? 'close comments' : 'open comments'}
                </button>*/}
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { isOpen, comment } = this.props

        //if (!isOpen) return null

        return (
            <section className="comment">
                <div className="comment__author" style={{'margin-bottom': '10px'}}>{comment.user}</div>
                <div className="comment__text">{comment.text}</div>
            </section>
        )
    }

    //toggleOpen = () => this.props.toggleOpen(this.props.comment.id)
}

export default Comment