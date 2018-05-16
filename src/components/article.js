import React, { PureComponent } from 'react'
import Comments from './comments'

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
                <div>
                    {this.getBody()}
                </div>
            </div>
        )
    }

    getBody() {
        const { isOpen, article } = this.props

        if (!isOpen) return null

        return (
            <section>
                {article.text}
                <Comments comments={this.props.article.comments}/>
            </section>
        )
    }

    setTitleRef = title => console.log('---', title)

    toggleOpen = () => this.props.toggleOpen(this.props.article.id)
}

export default Article