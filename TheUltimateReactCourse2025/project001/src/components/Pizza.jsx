import '../App.css'

function Pizza(props) {

  if (props.pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>

        <span>{props.pizzaObj.soldOut ? "SOLD OUT" : props.pizzaObj.price}</span>
      </div>
    </li>

  );
}

export default Pizza;