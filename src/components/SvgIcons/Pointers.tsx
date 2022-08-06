import React from 'react'

import {SvgIcon} from './SvgIcon'

export const ChevronRightIcon: SvgIcon = ({
  width = 20,
  height = 20,
  strokeWidth = 1.2,
  classes = '',
  fillColor = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    fill={fillColor}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    className={classes}
  >
    <path
      strokeWidth={strokeWidth}
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
)
