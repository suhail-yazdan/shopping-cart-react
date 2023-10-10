import React from 'react'
import Counter from './Counter'
import "./cardstyle.css";

const Card = (props) => {
  return (
    <div className='card selected'>
      <h2> {props.productDetail.name} </h2>
      <p>{props.productDetail.desc}</p>
      <div className='overlay'>
        <Counter />
      </div>
    </div>
  )
}

export default Card
