import React, { Component } from 'react'
import './style.css'

class Comment extends Component {
    render () {
        const {comment} = this.props;

        return (
            <div className="comment">
                <h6>{comment.user}</h6>
                <p>{comment.text}</p>
            </div>
        )
    }
}

export default Comment;