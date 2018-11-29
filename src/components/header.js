import React from 'react'
import { Link } from 'gatsby'
import TopbarLink from './topbarLink'

const Header = ({ siteTitle }) => (
  <div
    className="header"
    style={{
      background: '#474747',
      boxShadow: '0 3px 40px rgba(0, 0, 0, 0.2)',
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      zIndex: '100',
      borderTop: '2px solid #FFD524',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '10px 16px',
        textAlign: 'center',
      }}
    >
      <Link
        to="/"
        style={{
          color: window.location.pathname === '/' ? '#FFD524' : 'white',
          textDecoration: 'none',
          textTransform: 'uppercase',
          fontSize: '18px',
          fontFamily: 'Bungee, cursive',
          marginRight: '20px',
        }}
      >
        TJN
        <span style={{ fontSize: '0.6em', color: '#969696' }}>io</span>
      </Link>
      <TopbarLink to="/portfolio">Portfolio</TopbarLink>
      <TopbarLink to="/about">About</TopbarLink>
      <TopbarLink to="/contact">Contact</TopbarLink>
      <TopbarLink to="/blog">Blog</TopbarLink>
    </div>
  </div>
)

export default Header
