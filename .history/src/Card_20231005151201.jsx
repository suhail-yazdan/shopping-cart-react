import React, { useState } from 'react'
import Counter from './Counter'
import "./cardstyle.css";

const Card = (props) => {
  const [cardSelected, setCardSelected] = useState(false)

  

  return (
    <div className={`card ${cardSelected===true ? "selected" : "deselected"}`}>
      <h2> {props.productDetail.name} </h2>
      <p>{props.productDetail.desc}</p>
      <div className='overlay'>
        <Counter />
      </div>
    </div>
  )
}

export default Card
