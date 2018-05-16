import React, { PureComponent } from 'react'
import CommentsBlock from './comments-block'

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
        const { isOpen, article } = this.props
        return (
			<div>
				<section>
					{article.text}
				</section>
				<div>
					<CommentsBlock comments = {article.comments}/>
				</div>
			</div>
        )
    }

    setTitleRef = title => console.log('---', title)

    toggleOpen = () => this.props.toggleOpen(this.props.article.id)
}

export default Article