import "./cartstyle.css"

const Cart = (props) => {
  return (
    <div >
      <h3 onClick={props.setShowCart} className="cart"> 
        My Cart
        <sup className="totalItems">
          {props.products.reduce((total, product) => total + product.quantity, 0)}
        </sup>
      </h3>

      {props.showCart && 
        <div className="popup">
          <ul>
            {props.products.map(item =>(                            
              <li key={item.pid}>
                {item.quantity ? `${item.name}: ${item.quantity}` : ""}
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  )
}

export default Cart
