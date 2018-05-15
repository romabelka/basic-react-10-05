// HOC === Higher Order Component === decorator
import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        openItemId: undefined
    };

    toggleOpenItem = openItemId => {
        openItemId = openItemId === this.state.openItemId ? undefined : openItemId;

        this.setState({ openItemId })
    };

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenItem = {this.toggleOpenItem}/>
    }
}