import React, {Component} from 'react'
import Comment from './comment'
import toogleOpen from '../decorators/toogle-open'

function CommentList(props) {
    const commmentElements = props.comments.map(comment => <li key={comment.id}>
            <Comment comment={comment}/>
        </li>)
    var commentsBody = props.isOpenList ? commmentElements : '';

    return (
        <div>
            <button onClick = {props.toggleList}>
                {props.isOpenList ? 'close comments' : 'open comments'}
            </button>
            <ul>
                {commentsBody}
            </ul>
        </div>
    )
}

export default toogleOpen(CommentList)