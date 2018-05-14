import React, { Component } from 'react'

class Chart extends Component {
    render() {
        return <div ref = {this.setContainerRef}/>
    }

    componentDidUpdate() {
        //update your charts in this.container
    }

    setContainerRef = container => {
        this.container = container

        if (container) {
            //perform som charting with d3
        } else {
            //clean up
        }
    }
}

export default Chart