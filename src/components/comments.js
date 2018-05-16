import React, {Component} from 'react'
import Comment from './comment'
import toggle from '../decorators/toggle'

class Comments extends Component  {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    static defaultProps = {
        comments: []
    }

    render() {
        const {isOpen, toggle} = this.props
        const nameBtn = isOpen ? 'hide comment' : 'open comment'

        return (

            <div>
                <button onClick={toggle}>{nameBtn}</button>
                {this.getBody()}
            </div>
        )
    }
    getBody() {
        const {isOpen, comments}= this.props
        if(!isOpen) return null

        if(comments.length)
        return (
            <ul>
                {comments.map(comment => <div key = {comment.id}><Comment comment= {comment}/></div>)}
            </ul>
        )
    }

}

export default toggle(Comments)