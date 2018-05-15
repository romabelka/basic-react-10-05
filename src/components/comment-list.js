import React, { Component } from 'react';
import switcher from '../decorators/switcher';

class CommentList extends Component {
    render() {
        const commentList = this.getCommentList();
        const button      = this.getButton();

        return (
            <div>
                {button}
                {commentList}
            </div>
        )
    }

    getCommentList() {
        if (this.props.isOn) {
            const comments = this.props.comments.map(
                comment => <li key={comment.id}>
                    <h5>{comment.user}</h5>
                    <p>{comment.text}</p>
                </li>
            );

            return (
                <ul>
                    {comments}
                </ul>
            );
        }
    }

    getButton() {
        const text = this.getButtonText();

        return <button onClick={this.props.switch}>{text}</button>;
    }

    getButtonText() {
        return this.props.isOn ? 'Hide comments' : 'Show comments';
    }
}

export default switcher(CommentList);