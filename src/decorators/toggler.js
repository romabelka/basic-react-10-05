import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        open: false
    }

    toggleOpen = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
    }
}