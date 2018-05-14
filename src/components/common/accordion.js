import React, { Component } from 'react'

class Accordion extends Component {
    state = {
        openItemId: null
    }

    toggleOpenItem = openItemId => () => this.setState({ openItemId })
}

export default Accordion