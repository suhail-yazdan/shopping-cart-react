import React, { useEffect, useState } from 'react'
import Counter from './Counter'
import "./cardstyle.css"

const Card = (props) => {
  const [cardSelected, setCardSelected] = useState(false)
  
  const getCardClass = () => {
    let cardClass = cardSelected === true ? "card selected" : "card deselected";
    return cardClass
  }

  const getOverlayState = () => {
    let overlayclass = cardSelected === true ? "overlay show" : "overlay hide";
    return overlayclass;
  };

  // console.log("get Card Class: ", getCardClass())


  return (
    <div className={getCardClass()} >
      <h2> {props.productDetail.name} </h2>
      <p>{props.productDetail.desc}</p>
      <div className={getOverlayState()}>
        <Counter />
      </div>
    </div>
  )
}

export default Card
