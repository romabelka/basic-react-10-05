import React, {Component} from 'react';
import Comment from './comment';
import toggleOpen from '../decorators/toggle-open';

class CommentsList extends Component {
    render () {
        const {comments, isOpen} = this.props;

        if(!comments) return null;

        return (
            <section>
                <h2>Comments:</h2>
                <button onClick = {this.toggleOpen}>
                    { 
                        isOpen 
                            ? 'hide comments'
                            : 'show comments'
                    }
                </button>
                {this.getCommetsList()}
            </section>
        );
    }

    getCommetsList = () => {
        const {comments, isOpen} = this.props;

        if(!isOpen) return null;

        const commentsElements = comments.map(comment =>  
            <li key = { comment.id }>
                <Comment user = { comment.user } text = { comment.text } />
            </li>
        );

        return (
            <ul>
                { commentsElements }
            </ul>
        );   
    }

    toggleOpen = () => this.props.toggleOpenItem(this.props.isOpen);
}

export default toggleOpen(CommentsList);