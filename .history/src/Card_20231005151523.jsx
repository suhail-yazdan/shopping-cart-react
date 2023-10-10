import React, { useEffect, useState } from 'react'
import Counter from './Counter'
import "./cardstyle.css";

const Card = (props) => {
  const [cardSelected, setCardSelected] = useState(false)

    const getCardClass = () => {
    let cardclass =
      this.state.overlay === true ? "card selected" : "card deselected";
    return cardclass;
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
