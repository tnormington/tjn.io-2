import React from 'react'

import './heroFlipper.sass'

import streak from '../images/streak.png'

import { getRandomArbitrary } from '../util'

export default ({ term }) => (
  <div
    style={{
      width: '100%',
      height: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '10vh',
      fontWeight: '400',
      color: '#fff',
      textShadow: '2px, 2px 4px, rgba(0, 0, 0, 0.3)',
      fontFamily: 'Abril Fatface, cursive',
      position: 'relative',
      zIndex: '1',
    }}
  >
    <div className="animated-words">
      {term.split('').map((t, i) => (
        <span
          key={t + i}
          className="letter"
          style={{
            animationDelay: `${getRandomArbitrary(1, 5)}00ms`,
            animationDuration: `${getRandomArbitrary(1, 5)}00ms`,
          }}
          data-text={t}
        >
          {t}
        </span>
      ))}
    </div>
    <img
      alt="background yellow streak"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '-1',
      }}
      src={streak}
    />
    <div className="flicker" />
    <div className="flicker flicker--delay flicker--small" />
  </div>
)
