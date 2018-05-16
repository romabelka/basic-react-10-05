import React from 'react'
//import accordion from '../decorators/accordion'
import Comment from './comment'


class CommentList extends React.Component {

    constructor(props) {
        super(props);
        this.state =  {
            isOpen: false
        }
    }
    
    toggleOpenComments = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
    
    render() {
        const comments = this.props.comments || [];
        const commentElements = comments.map(comment => <li key={comment.id}>
            <Comment comment={comment} />
        </li>);

        return (
            <div>
                <button onClick = {this.toggleOpenComments}>
                    {this.state.isOpen ? 'close comments' : 'open comments'}
                </button>
                {this.state.isOpen && 
                    <ul>
                        {commentElements}
                    </ul>}
            </div>
        )
    }
}


export default CommentList