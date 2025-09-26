import '../App.css'

function Pizza() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <div>
      <img src="pizzas/focaccia.jpg" alt="Focaccia" />
      <h2>Focaccia</h2>
      <p>Bread with italian olive oil and rosemary</p>
      <p>Price: $6</p>
    </div>
  );
}

export default Pizza;