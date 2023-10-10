import "./counterstyle.css";

export default function Counter() {
    return (
      <div className="counter">
        Quantity &nbsp;
        <span className="badge badge-warning">
          "Zero"  
        </span>
        &nbsp;
        <button>
          +
        </button>
        <button>
          -
        </button>
      </div>
    );
}
