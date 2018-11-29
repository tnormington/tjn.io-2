import React, { Component } from 'react'

import Img from 'gatsby-image'

import './imageExpander.sass'

export default class ImageExpander extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <Img fluid={this.props.fluid} />
        <div className="bottom-gradient" />
      </div>
    )
  }
}
