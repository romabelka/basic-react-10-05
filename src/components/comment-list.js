import React, {Component} from 'react';
import toggle from '../decorators/toggle';

class CommentList extends Component {
    render() {
        const commentElements = this.props.comments.map(comment => {
            return (
                <li key={comment.id} className="comment">
                    <div className="comment__user">{comment.user}</div>
                    <div className="comment__text">{comment.text}</div>
                </li>
            );
        });
        const { toggleItem, open, comments } = this.props;
        return (
            <div className="article__comments">
                <button className="btn float-right"
                        onClick={toggleItem.bind(this)}>
                    {open ? 'закрыть комментарии' : 'открыть комментарии'}
                </button>
                <div className="article__comments-count">Комментарии: {comments.length}</div>
                {open && <ul>{commentElements}</ul>}
            </div>
        )
    }
}

export default toggle(CommentList);