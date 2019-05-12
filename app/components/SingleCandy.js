import React, { Fragment } from 'react'

export const SingleCandy = props => {
  const { id, name, description, imageUrl, quantity } = props.candies
  return (
    <Fragment>
      <div>
        <h3>{name}</h3>
        <span>{description}</span>
        <img>{imageUrl}</img>
      </div>
      <div>{quantity}</div>
    </Fragment>
  )
}
