import React, {Component} from 'react'

class Comment extends Component {
    render () {
        const {user, text} = this.props.comment;
        return (
            <div>
                <b>{user}</b> says:<br/>
                {text}
            </div>
        );
    }
}

export default Comment;
