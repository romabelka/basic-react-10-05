import React from 'react';

export default (OriginalComponent) => class ToggleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.buttonText = props.buttonText || { close: 'закрыть', open: 'открыть'};
    }

    toggleItem = () => this.setState({ open: !this.state.open });

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleItem={this.toggleItem} open={this.state.open}/>
    }
}