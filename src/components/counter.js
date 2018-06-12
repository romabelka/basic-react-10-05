import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment } from '../ac'
import { translate } from '../context/translate'

class Counter extends Component {
  static propTypes = {
    count: PropTypes.number
  }

  render() {
    return (
      <div>
        <h2>{this.props.count}</h2>
        <button onClick={this.handleIncrement}>{translate('Increment')}</button>
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
