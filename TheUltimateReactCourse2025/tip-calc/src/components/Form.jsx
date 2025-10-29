export default function Form() {

  function handleCalculation(cost, yourValue, friendValue) {
    return (cost * ((yourValue + friendValue) / 100))
  }

  function handleSubmit(event) {
    event.preventDefault()
    let cost = document.querySelector('input').value
    let yourValue = document.querySelector('select[name="your-value"]').value
    let friendValue = document.querySelector('select[name="friend-value"]').value

    let total = handleCalculation(cost, yourValue, friendValue)

    console.log(total)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>

        <label htmlFor="bill">How much was the bill? </label>
        <input type="text" />
      </div>

      <div>
        <label htmlFor="your-value">How did you like the service? </label>
        <select name="your-value" id="your-value">
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">It was very good (15%)</option>
          <option value="30">It was amazing (30%)</option>
        </select>
      </div>

      <div>
        <label htmlFor="friend-value">How did your friend like the service? </label>
        <select name="friend-value" id="friend-value">
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">It was very good (15%)</option>
          <option value="30">It was amazing (20%)</option>
        </select>
      </div>

      <div>
        <h3>
          You Pay $00
        </h3>
      </div>

    </form>
  )

}