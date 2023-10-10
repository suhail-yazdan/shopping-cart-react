import React from 'react'

const Card = () => {
  return (
    <div>
      <h2> Strawberry Shake </h2>
      <p> Finest Strawberries, Milk, Sugar </p>
      <div>
        <Counter
          product={this.props.prodDetail}
          onIncrement={this.props.onQuantityIncrease}
          onDecrement={this.props.onQuantityDecrease}
        />
      </div>
    </div>
  )
}

export default Card
