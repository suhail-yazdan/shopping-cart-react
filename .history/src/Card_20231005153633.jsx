import React, { useEffect, useState } from 'react'
import Counter from './Counter'
import "./cardstyle.css"

const Card = (props) => {
  const [cardSelected, setCardSelected] = useState(true)
  
  const getCardClass = () => {
    let cardClass = cardSelected === true ? "card selected" : "card deselected";
    return cardClass
  }

  // console.log("get Card Class: ", getCardClass())


  return (
    <div className={console.log("get Card Class: ", getCardClass())}>
      <h2> {props.productDetail.name} </h2>
      <p>{props.productDetail.desc}</p>
      <div className='overlay'>
        <Counter />
      </div>
    </div>
  )
}

export default Card
