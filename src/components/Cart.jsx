import { useState } from "react";
import "../styles/cartStyles.css"

const Cart = (props) => {
  const [displayCart, setDisplayCart] = useState(false);

  function showCart() {
    setDisplayCart(!displayCart);
  }

  return (
    <div className="cart" onClick={showCart}>
      <h3> 
        My Cart
        <sup className="totalItems">
          {props.selectedProducts.reduce((total, product) => total + product.quantity, 0)}
        </sup>
      </h3>

      {displayCart && 
        <div className="popup">
          <ul>
            {props.selectedProducts.map(item =>(                            
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
