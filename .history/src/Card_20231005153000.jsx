import React, { useEffect, useState } from 'react'
import Counter from './Counter'
import "./cardstyle.css"

const Card = (props) => {
  const [cardSelected, setCardSelected] = useState(false)
  
  const getCardClass = () => {
    let cardClass = cardSelected ? "card selected" : "card deselected";
    return cardClass
  }

  useEffect(() => {
    getCardClass()
  }, [])

  return (
    <div className={() => getCardClass()}>
      <h2> {props.productDetail.name} </h2>
      <p>{props.productDetail.desc}</p>
      <div className='overlay'>
        <Counter />
      </div>
    </div>
  )
}

export default Card
