import React, { Component } from 'react';
import Comment from './comment';
import toggleopen from '../decorators/toggleopen';

class CommentList extends Component {
    render() {
        const {isOpen} = this.props;
        return(
            <div>
                <button onClick = {this.toggleOpen}>{ isOpen ? 'close' : 'open' }</button>
                <ul>
                    {this.getBody()}
                </ul>
            </div>
        );
    }

    getBody() {
        const {comments, isOpen} = this.props;
        const commentElements = comments.map(comment => <li key={comment.id}>
            <Comment comment = { comment }/>
        </li>);

        return (
            <div>
                {isOpen ? commentElements : null}
            </div>
        )
    }

    toggleOpen = () => {
        const {isOpen} = this.props;
        this.props.toggleOpenItem(!isOpen);
    }

}
export default toggleopen(CommentList);
