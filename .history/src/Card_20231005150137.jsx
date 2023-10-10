import React from 'react'
import Counter from './Counter'
import "./cardstyle.css";

const Card = (props) => {
  return (
    <div className='card selected'>
      <h2> {console.log("product: ", props)} </h2>
      <p>  </p>
      <div className='overlay'>
        <Counter />
      </div>
    </div>
  )
}

export default Card
