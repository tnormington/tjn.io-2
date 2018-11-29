import React from 'react'

const style = {
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    marginRight: '6px',
  },
  dotSmall: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    marginRight: '3px',
  },
}

export default ({ round, small }) => {

  let dotStyle = style.dot

  if(small) {
    dotStyle = style.dotSmall
  }

  return (
    <div
      style={{
        padding: small ? '6px' : '10px',
        borderTopLeftRadius: round ? '8px' : '',
        borderTopRightRadius: round ? '8px' : '',
        backgroundImage: 'linear-gradient(to bottom, #3C4043 0%, #2C2F31 100%)',
        display: 'flex',
      }}
    >
      <div style={{ ...dotStyle, background: '#FF5750' }} />
      <div style={{ ...dotStyle, background: '#FFBF2F' }} />
      <div style={{ ...dotStyle, background: '#27CA41' }} />
    </div>
  )
}
