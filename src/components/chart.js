import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Chart extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        comments: PropTypes.array
      })
    )
  }

  render() {
    return <div ref={this.setContainerRef} />
  }

  componentDidUpdate() {
    //update your charts in this.container
  }

  setContainerRef = (container) => {
    this.container = container

    if (container) {
      //perform som charting with d3
    } else {
      //clean up
    }
  }
}

export default Chart
