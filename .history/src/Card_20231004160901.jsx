import React from 'react'
import Counter from './Counter'
import "./cardstyle.css";

const Card = () => {
  return (
    <div>
      <h2> Strawberry Shake </h2>
      <p> Finest Strawberries, Milk, Sugar </p>
      <div>
        <Counter />
      </div>
    </div>
  )
}

export default Card
