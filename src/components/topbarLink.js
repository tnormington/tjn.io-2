import React from 'react'
import Link from 'gatsby-link'

import './topbarLink.sass'

export default ({ to, children, window }) => {
  let active = false
  if (window) {
    const { pathname } = window.location
    active = pathname === to
  }
  return (
    <Link to={to} className={`topbar-link ${active ? 'active' : ''}`}>
      {children}
    </Link>
  )
}
