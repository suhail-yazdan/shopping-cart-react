import "./cartstyle.css"

const Cart = (props) => {
  return (
    <div className="cart">
      <h3> My Cart </h3>
      {props.showCart && 
      <div className="">
        <ul>
            <li>
              0 
            </li>
        </ul>
      </div>
      
      
      }
      
    </div>
  )
}

export default Cart
