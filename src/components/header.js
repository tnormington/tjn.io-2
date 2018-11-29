import React, { Component } from 'react'
import { Link } from 'gatsby'
import TopbarLink from './topbarLink'

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = { window: false }
  }

  componentDidMount() {
    this.setState({ window: window })
  }

  render() {
    const { window } = this.state

    return (
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
              color:
                window && window.location.pathname === '/'
                  ? '#FFD524'
                  : 'white',
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
          <TopbarLink window={window} to="/portfolio">
            Portfolio
          </TopbarLink>
          <TopbarLink window={window} to="/about">
            About
          </TopbarLink>
          <TopbarLink window={window} to="/contact">
            Contact
          </TopbarLink>
          <TopbarLink window={window} to="/blog">
            Blog
          </TopbarLink>
        </div>
      </div>
    )
  }
}
