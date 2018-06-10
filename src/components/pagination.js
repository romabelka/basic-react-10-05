import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { COMMENTS_PER_PAGE, COMMENTS_URI } from '../constants'

class Pagination extends Component {
  render() {
    if (!this.props.total) return null

    return <nav>{this.pagination}</nav>
  }

  get pagination() {
    const { total } = this.props
    const pages = Math.ceil(total / COMMENTS_PER_PAGE)
    const links = []
    for (let i = 1; i <= pages; i++) {
      links.push(
        <NavLink to={COMMENTS_URI + i} key={i} activeStyle={{ color: 'red' }}>
          {i}
        </NavLink>
      )
    }
    return links
  }
}

export default Pagination
