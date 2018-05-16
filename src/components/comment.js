import React, {Component} from 'react'

class Comment extends Component {
	render() {
		const {comment} = this.props
		return 	(
			<div> 
			 <h3>{comment.user}</h3>
			 <p>{comment.text}</p>
			
			</div>
		
		
		)
	}
}
export default Comment