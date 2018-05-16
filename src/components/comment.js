import React, {Component} from 'react';

class Comment extends Component {
    render () {
        const {user, text} = this.props;
        return (
            <article>
                <h1> { user } </h1>
                <p> { text } </p>
            </article>
        );
    }
}

export default Comment;