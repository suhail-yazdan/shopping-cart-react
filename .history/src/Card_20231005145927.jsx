import React from 'react'
import Counter from './Counter'
import "./cardstyle.css";

const Card = ({product}) => {
  return (
    <div className='card selected'>
      <h2> {product.name} </h2>
      <p> {product.desc} </p>
      <div className='overlay'>
        <Counter />
      </div>
    </div>
  )
}

export default Card
