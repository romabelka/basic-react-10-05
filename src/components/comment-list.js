import React from 'react';
import Comment from './comment';
import toggler from '../decorators/toggler';


function CommentList (props) {
    if (!props.article.comments || !props.article.comments.length) return null;

    const commentElements = props.article.comments.map(comment => {
        return props.open
            ? <Comment key = {comment.id}
                        comment = {comment}
                        toggleOpen = {props.toggleOpen} />
            : null;
    });
        
    return (<div>
        <button onClick = {props.toggleOpen}>
            {props.open ? 'close comments' : 'open comments'}
        </button>
        {commentElements}
    </div>);
}

export default toggler(CommentList);
