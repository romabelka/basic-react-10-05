import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        isOn: false
    };

    switch  = () => this.setState({ isOn: !this.state.isOn });

    render() {
        return <OriginalComponent {...this.props} {...this.state} switch={this.switch} />
    };
}