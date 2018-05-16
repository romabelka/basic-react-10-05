import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        isDisplayed: true
    }

    toggleDisplay = () => {
        this.setState({
            isDisplayed: !this.state.isDisplayed
        })
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleDisplay = {this.toggleDisplay}/>
    }
}