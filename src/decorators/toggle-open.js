// HOC === Higher Order Component === decorator
import React, {Component} from 'react'

export default (OriginalComponent) => class DecoratedComponent extends Component {
    state = {
        isShowComments: false
    }

    showComments = () => {
        this.setState((prevState) => ({isShowComments: !prevState.isShowComments}))
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} showComments = {this.showComments} />
    }
}