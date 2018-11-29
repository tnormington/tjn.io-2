import React from 'react'

import Layout from '../components/layout'

import face from '../images/face.png'

export default () => (
  <Layout>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>About Me</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          maxWidth: '700px',
          margin: '0 auto',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <img src={face} style={{ marginRight: '1rem', maxWidth: '300px', width: '100%' }} />
        <div style={{ marginBottom: '2rem', flex: '1 1 250px' }}>
          <p>
            I'm Tim Normington and I am a website developer. I enjoy nature, the
            ocean, my dogs, computers, music, and food. I've lived in a few
            places over the past few years, but I now I am New Hampshire and
            lovin' it.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)
