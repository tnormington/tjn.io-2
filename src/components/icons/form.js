import React from 'react'

export default ({ color, style, onClick }) => (
  <svg
    width="67px"
    height="67px"
    viewBox="0 0 67 67"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      cursor: 'pointer',
      padding: '10px',
      borderRadius: '5px',
      ...style,
    }}
    tabIndex="0"
    onClick={onClick}
  >
    <defs />
    <g id="assets" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="form" fill={color} fillRule="nonzero">
        <path
          d="M66.3860126,29.9259687 L60.1048117,23.6447187 C59.2861618,22.8260625 57.9629222,22.8260625 57.1442723,23.6447187 L50.2496074,30.5394375 L50.2496074,2.09375 C50.2496074,0.938 49.3137085,0 48.1558738,0 L2.09373364,0 C0.937992672,0 0,0.938 0,2.09375 L0,64.90625 C0,66.062 0.937992672,67 2.09373364,67 L48.1558738,67 C49.3137085,67 50.2496074,66.062 50.2496074,64.90625 L50.2496074,49.0230625 L66.3860126,32.8865313 C67.2046625,32.067875 67.2046625,30.744625 66.3860126,29.9259687 Z M10,10 L39,10 L39,16 L10,16 L10,10 Z M10,23 L39,23 L39,29 L10,29 L10,23 Z M10,36 L33,36 L33,42 L10,42 L10,36 Z M36.2686589,56 L33,56 L33,52.7313411 L57.7313411,28 L61,31.2686589 L36.2686589,56 Z"
          id="Shape"
        />
      </g>
    </g>
  </svg>
)
