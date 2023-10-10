import "./cartstyle.css"

const Cart = (props) => {
  return (
    <div className="cart">
      <h3 onClick={!props.showCart}> My Cart<sup className="totalItems">23</sup> </h3>
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
