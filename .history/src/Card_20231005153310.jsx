import React, { useEffect, useState } from 'react'
import Counter from './Counter'
import "./cardstyle.css"

const Card = (props) => {
  const [cardSelected, setCardSelected] = useState(true)
  
  const getCardClass = () => {
    return cardSelected === true ? "card selected" : "card deselected";
  }



  return (
    <div className={cardSelected === true ? "card selected" : "card deselected"}>
      <h2> {props.productDetail.name} </h2>
      <p>{props.productDetail.desc}</p>
      <div className='overlay'>
        <Counter />
      </div>
    </div>
  )
}

export default Card
