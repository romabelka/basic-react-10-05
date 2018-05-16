import React, { Component } from 'react'

export default (OriginalComponent) => class DecoratedComponent extends Component {
    state = {
        isOpen: false
    }

    toggleDropdown = () => {
        console.log('ok lets toggle comments');
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleDropdown={this.toggleDropdown}/>
    }
}