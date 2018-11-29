import React from 'react'

import colors from '../colors'

export default ({ text, style }) => (
  <div
    style={
      {
        border: `1px solid ${colors.yellow}`,
        borderRadius: '30px',
        color: colors.yellow,
        fontSize: '13px',
        textTransform: 'uppercase',
        display: 'inline-block',
        padding: '4px 16px',
        ...style
      }
    }
  >
    {text}
  </div>
)
