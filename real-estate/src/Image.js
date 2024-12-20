import React from 'react'

export const Image = ({imageRef,altText}) => {
  return (
    <img src={imageRef} alt={altText}></img>
  )
}
