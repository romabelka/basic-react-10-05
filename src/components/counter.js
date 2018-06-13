import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment } from '../ac'

class Counter extends Component {
  static propTypes = {
    count: PropTypes.number
  }

  render() {
    return (
      <div>
        <h2>{this.props.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }

  handleIncrement = () => {
    this.props.dispatch(increment())
  }
}

const mapStateToProps = (state) => ({
  count: state.counter
})

export default connect(mapStateToProps)(Counter)
