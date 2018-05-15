import React, {Component} from 'react';
import openClosable from "../decorators/open-closable";

class CommentList extends Component {
    render() {
        const {isOpen, comments} = this.props

        if (!comments) {
            return null
        }

        return (

            <div>
                <h3>Comments</h3>
                <button onClick={this.toggleOpen}>
                    {isOpen ? 'close comments' : 'open comments'}
                </button>
                {this.getBody()}
            </div>
        );
    }

    getBody() {
        const {comments, isOpen} = this.props

        if (!isOpen) {
            return null
        }

        return (

            <ul>
                {comments.map(comment => <li key={comment.id}>
                    {comment.user} : {comment.text}
                </li>)}
            </ul>
        )
    }

    toggleOpen = () => this.props.toggleOpen()
}


export default openClosable(CommentList)
