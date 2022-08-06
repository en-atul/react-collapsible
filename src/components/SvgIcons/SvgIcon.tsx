import React from 'react'

export interface SvgIconProps {
  width?: number
  height?: number
  strokeWidth?: number
  strokeColor?: string
  fillColor?: string
  rotateCenter?: number
  classes?: string
  onClick?: () => void
  datacy?: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SvgIcon extends React.FC<SvgIconProps> {}
