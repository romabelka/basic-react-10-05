import React, { Component } from 'react';
import Comment from './comment';
import accordion from '../decorators/accordion';

class CommentList extends Component {
    state = {
        isOpen: true
    }
    render() {
        return(
            <div>
                <button onClick = {this.toggleOpen}>open comments</button>
                <ul>
                    {this.getBody()}
                </ul>
            </div>
        );
    }

    getBody() {
        const {comments, id, openItemId} = this.props;
        const commentElements = comments.map(comment => <li key={comment.id}>
            <Comment comment = { comment }/>
        </li>);

        return (
            <div>
                {id === openItemId ? commentElements.map(item => item) : null}
            </div>
        )
    }

    toggleOpen = () => {
        !this.props.openItemId ? this.props.toggleOpenItem(this.props.id) : this.props.toggleOpenItem(null);
    }
}
export default accordion(CommentList);