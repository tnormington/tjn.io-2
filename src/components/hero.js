import React, { Component } from 'react'

import face from '../images/face-no-bg.png'

import HeroFlipper from './heroFlipper'

import { randomItemFromArray } from '../util'

const terms = [
  'Design',
  'Develop',
  'Create',
  'Explore',
  'Discover',
  'Express',
  'Analyze',
  'Evaluate',
]

const ticker = 2000

export default class Hero extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: randomItemFromArray(terms),
    }

    this.tickerCallback = this.tickerCallback.bind(this)
  }

  componentDidMount() {
    this.interval = window.setInterval(this.tickerCallback, ticker)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval)
  }

  tickerCallback() {
    this.setState(prev => {
      const termIndex = terms.indexOf(prev.term)

      // set index to the next term
      let i = termIndex + 1

      // if that term is undefined, start the loop over
      if (terms[i] === undefined) i = 0

      return {
        term: terms[i],
      }
    })
  }

  render() {
    return (
      <div
        style={{
          height: 'calc(100vh - 50px)',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundImage: 'linear-gradient(to top, #212121 0%, #383838 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontWeight: '300',
              color: '#fff',
              textAlign: 'right',
              lineHeight: 1.3,
            }}
          >
            Hello,
            <br />
            I’m Tim,
            <br />
            and I like to
          </h1>
          <img
            src={face}
            alt="my face"
            style={{ width: '200px', height: 'auto' }}
          />
        </div>
        <HeroFlipper term={this.state.term} />
      </div>
    )
  }
}
