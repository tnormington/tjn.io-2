import React from 'react';

import externalIcon from '../images/external-gray.svg'

export default ({ url, style }) => (
  <a
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      ...style
    }}
    className="anchor anchor--gray"
    target="_blank"
    href={url}
    rel="noopener noreferrer"
  >
    {url}
    <img
      src={externalIcon}
      alt="external link icon"
      style={{ width: '18px', height: 'auto', marginLeft: '6px' }}
    />
  </a>
)