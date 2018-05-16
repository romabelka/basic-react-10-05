import React, {Component} from 'react'
import Comment from './comment'
import toggler from '../decorators/toggler'

class CommentsBlock extends Component {
	render() {
		const {isOpen, toggleOpen} = this.props
		return (
		<div> 
			<button onClick = {this.props.toggleOpen}>
			
				{isOpen ? "Hide Comments" : "Show comments"}
			
			</button>
			
			<ul>
			{this.comments}
			</ul>
			
		
		</div>
		
		
			)
		}
	
	
getComments() {
        const {comments, isOpen} = this.props
		if(!isOpen) return null
        return comments.map(comment => (
				
				<li key = {comment.id}>

					<Comment comment = {comment}/>
			
			   </li>
				
        ))
    }
}
export default toggler(CommentsBlock)
