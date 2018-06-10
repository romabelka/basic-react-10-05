import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const FIRST_PAGE = 1

class Pagination extends Component {
  static propTypes = {
    total: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired
  }

  render() {
    const { total, perPage, link } = this.props

    if (!total) return null

    const pages = Math.ceil(total / perPage)

    if (pages <= FIRST_PAGE) return null

    const navs = []

    for (let page = FIRST_PAGE; page <= pages; page++) {
      const url = link.replace(':page', page)

      navs.push(
        <NavLink to={url} key={page} activeStyle={{ color: 'red' }}>
          {page}
        </NavLink>
      )
    }

    return <nav>{navs}</nav>
  }
}

export default Pagination
