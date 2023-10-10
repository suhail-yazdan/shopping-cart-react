import './App.css';
import Card from "./Card.jsx";
import Cart from "./Cart.jsx";

function App() {
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
