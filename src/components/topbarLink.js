import React from 'react'
import Link from 'gatsby-link'

import './topbarLink.sass'

export default ({ to, children }) => {
  const { pathname } = window.location
  const active = pathname === to
  return (
    <Link to={to} className={`topbar-link ${active ? 'active' : ''}`}>
      {children}
    </Link>
  )
}
