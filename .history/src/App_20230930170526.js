import { useState } from 'react';
import './App.css';
import Card from "./Card.jsx";
import Cart from "./Cart.jsx";

function App() {
  const [products, setProducts] = useState([
    {
      pid: 1,
      name: "Strawberry Shake",
      desc: "Finest Strawberries, Milk, Sugar",
      price: 149,
      quantity: 0
    },
    {
      pid: 2,
      name: "Chocolate Fantasy",
      desc: "Brownie with chocolate sauce topped with Vanilla Ice cream",
      price: 249,
      quantity: 0
    },
    {
      pid: 3,
      name: "Mediterranean Delight",
      desc: "Nuts and Dates from the soils of Algeria",
      price: 329,
      quantity: 0
    }
  ])
  return (
    <div>
      <header>
          <div className="grid1200">
            <Cart products={this.state.products} />
          </div>
        </header>
        <main>
          <div className="grid1200">
            {this.state.products.map(prod => (
              <Card
                key={prod.pid}
                prodDetail={prod}
                onQuantityIncrease={e => this.handleQuantityIncrease(prod, e)}
                onQuantityDecrease={e => this.handleQuantityDecrease(prod, e)}
              />
            ))}
          </div>
        </main>
    </div>
  );
}

export default App;
