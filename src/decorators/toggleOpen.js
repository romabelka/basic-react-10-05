// HOC === Higher Order Component === decorator
import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        openItems: null
    }

    commentsOpen = openItems => this.setState({ openItems })

    render() {
        return <OriginalComponent {...this.props} {...this.state} commentsOpen = {this.commentsOpen}/>
    }
}
