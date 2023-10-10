import React from 'react'
import Counter from './Counter'
import "./cardstyle.css";

const Card = ({...product}) => {
  return (
    <div className='card selected'>
      <h2> {console.log("product: ", product)} </h2>
      <p>  </p>
      <div className='overlay'>
        <Counter />
      </div>
    </div>
  )
}

export default Card
