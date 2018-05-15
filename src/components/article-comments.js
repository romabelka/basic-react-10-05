import React, { PureComponent } from 'react'

import Comment from './comment'
import accordion from '../decorators/accordion'

class ArticleComment extends PureComponent {
    state = {
        isOpen: false
    }

    toggleOpen = () =>{
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        const { article } = this.props
        const { isOpen } = this.state
        if(!article.comments) return null
        const comment = article.comments.map(comment =>
        <li key={comment.id}>
            <Comment commentaries={comment}/>
        </li>)
        return (
            <div>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? 'close comments' : 'open comments'}
                </button>
                    {isOpen ? comment : null}
            </div>
        )
    }
}

export default accordion(ArticleComment)
