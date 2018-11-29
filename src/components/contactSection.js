import React, { Component } from 'react'

import FormIcon from './icons/form'
import EnvelopeIcon from './icons/envelope'
import ContactForm from './contactForm'

export default class ContactSection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentSection: 'form',
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(section) {
    console.log(section)

    this.setState({
      currentSection: section,
    })
  }

  render() {
    const { currentSection } = this.state

    return (
      <div>
        <h3 style={{ textAlign: 'center', marginBottom: '3rem' }}>
          Wanna Chat?
        </h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            maxWidth: '400px',
            minHeight: '300px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              paddingTop: '1rem',
              marginRight: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <FormIcon
              onClick={() => this.handleClick('form')}
              style={{ marginBottom: '2rem' }}
              color={currentSection === 'form' ? '#fff' : '#595959'}
            />
            <EnvelopeIcon
              onClick={() => this.handleClick('email')}
              color={currentSection === 'email' ? '#fff' : '#595959'}
            />
          </div>
          {currentSection === 'form' && <ContactForm />}
          {currentSection === 'email' && (
            <div
              style={{
                padding: '3rem 0',
              }}
            >
              <a
                className="btn"
                style={{ minWidth: '200px', display: 'block' }}
                href="mailto:tim.j.normington@gmail.com"
              >
                Email Me
              </a>
            </div>
          )}
        </div>
      </div>
    )
  }
}
