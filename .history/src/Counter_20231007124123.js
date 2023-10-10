import "./counterstyle.css";

export default function Counter(props) {
    return (
      <div className="counter">
        Quantity &nbsp;
        <span className={props.product.quantity === 0 ? "warning" : "primary"}>
          {props.product.quantity === 0 ? "Zero": props.product.quantity}
        </span>
        &nbsp;
        <button className="btn btn-secondary" onClick={props.onIncrement}>
          +
        </button>
        <button className="btn btn-secondary" onClick={props.onDecrement}>
          -
        </button>
      </div>
    );
}
