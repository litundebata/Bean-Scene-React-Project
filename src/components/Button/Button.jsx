import React from 'react'
import './Button.css'
export const Button = ({buttonLabel, style}) => {
  return (
    <button style={style}>{buttonLabel}</button>
  )
}
