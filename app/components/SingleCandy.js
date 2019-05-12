import React from 'react'

export const SingleCandy = props => {
  const { name, description, imageUrl, quantity } = props.candy
  return (
      <div>
        <h3>{name}</h3>
        <div>{description}</div>
        <img src={imageUrl}/>
      <div> quantity: {quantity}</div>
    </div>
   )
}
