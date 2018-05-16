import React, { Component } from 'react'
import Comment from '../comment'
import './style.css'
import dropdown from '../../decorators/dropdown'

class CommentsList extends Component {
    render () {
        const {isOpen} = this.props;
        return (
            <div>
                <span className = 'toggle-comments' onClick={this.props.toggleDropdown}>{isOpen ? 'Close comments' : 'Open comments'}</span>
                <ul className = 'comments-list'>
                    {this.comments}
                </ul>
            </div>

        );
    }

    get comments () {
        if (!this.props.comments || !this.props.isOpen) return null;

        return this.props.comments.map(comment =>
            <li key={comment.id}>
                <Comment comment = {comment} />
            </li>
        );

    }
}

export default dropdown(CommentsList);