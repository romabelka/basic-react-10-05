// HOC === Higher Order Component === decorator
import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        isOpenList: false
    }

    toggleList = () => this.setState({isOpenList: !this.state.isOpenList})

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleList = {this.toggleList}/>
    }
}

