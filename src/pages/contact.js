import React from 'react'

import Layout from '../components/layout'
import ContactForm from '../components/contactForm'

export default () => (
  <Layout>
    <h1 style={{ textAlign: 'center' }}>Contact</h1>
    <div className="container">
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <p style={{ textAlign: 'center' }}>
          If you have any questions about my work and/or would like to set up
          some time to chat, please leave me a note, and I will do my best to
          get back to you soon.
        </p>
        <ContactForm />
      </div>
    </div>
  </Layout>
)
