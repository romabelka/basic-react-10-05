import React, { PureComponent } from 'react';
import CommentsList from './comments-list';

class Article extends PureComponent {
    render() {
        const { article, isOpen } = this.props
        return (
            <div>
                <h2 ref = {this.setTitleRef}>
                    {article.title}
                </h2>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
            
        )
    }

    getBody() {
        const { isOpen, article, comments } = this.props

        if (!isOpen) return null

        return (
            <div>
                <section>
                    {article.text}
                </section>
                <CommentsList comments = { comments } />
            </div>
        )
    }

    setTitleRef = title => console.log('---', title)

    toggleOpen = () => this.props.toggleOpen(this.props.article.id)
}

export default Article