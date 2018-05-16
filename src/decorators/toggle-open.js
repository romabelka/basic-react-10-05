import React from 'react';

export default (OriginComponent) => class DecoratedComponent extends React.Component {
    state = {
        isOpen: false
    };

    toggleOpenItem = () => this.setState({isOpen: !this.state.isOpen});

    render () {
        return <OriginComponent {...this.props} {...this.state} toggleOpenItem = {this.toggleOpenItem} />
    } 
}