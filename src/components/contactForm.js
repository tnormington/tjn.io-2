import React, { Component } from 'react'

export default class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: '1 1 100%',
        }}
      >
        <input type="email" placeholder="Email" />
        <textarea rows="5" placeholder="Inquiry" />
        <input type="submit" />
      </form>
    )
  }
}
