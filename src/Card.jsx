import React, { useState } from 'react'
import Counter from './Counter'
import "./cardstyle.css"

const Card = (props) => {
  const [cardSelected, setCardSelected] = useState(false)
  
  const getCardClass = () => {
    let cardClass = cardSelected === true ? "card selected" : "card deselected";
    return cardClass
  }

  const getOverlayState = () => {
    let overlayClass = cardSelected === true ? "overlay show" : "overlay hide";
    return overlayClass;
  };

  return (
    <div className={getCardClass()} onClick={() => setCardSelected(!cardSelected)}>
      <h2> {props.productDetail.name} </h2>
      <p>{props.productDetail.desc}</p>
      <div className={getOverlayState()}>
        <Counter 
          product = {props.productDetail}
          onIncrement={props.onQuantityIncreased}
          onDecrement={props.onQuantityDecreased} 
          />
      </div>
    </div>
  )
}

export default Card
