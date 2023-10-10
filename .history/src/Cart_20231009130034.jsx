import "./cartstyle.css"

const Cart = (props) => {
  return (
    <div className="cart">
      <h3 onClick={props.setShowCart}> My Cart<sup className="totalItems">23</sup> </h3>
      {props.showCart && 
        <div className="popup">
          <ul>
            {props.products.map(item =>(                            
              <li key={item.pid}>
                {item.quantity ? item.name : ""}
                {"Item: "+ console.log(item)}
              </li>
            ))}

          </ul>
        </div>
      }
      
    </div>
  )
}

export default Cart
