import "./counterstyle.css";

export default function Counter(props) {
    return (
      <div className="counter">
        Quantity &nbsp;
        <span className="badge badge-warning">
          {console.log("ddd: ", props)}
          "Zero"  
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
