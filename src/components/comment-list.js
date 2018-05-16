import React from 'react'
import Comment from './comment'
import accordion from '../decorators/accordion'

function CommentList(props) {
    const commentElements = props.comments.map(comment => <li key={comment.id}>
        <Comment comment={comment}
            isOpen={comment.id === props.openItemId}
            toggleOpen={props.toggleOpenItem}
        />
    </li>)

    return (
        <ul>
            {commentElements}
        </ul>
    )
}

export default accordion(CommentList)