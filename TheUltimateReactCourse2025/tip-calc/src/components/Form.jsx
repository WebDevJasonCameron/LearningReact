
export default function Form() {

  function handleTotalTipCalculation(cost, yourValue, friendValue) {
    const yourTip = (cost * (yourValue / 100));
    const friendTip = (cost * (friendValue / 100));
    return yourTip + friendTip;
  }

  function handleTotal (cost, tipTotal) {
    return cost + tipTotal;
  }

  function handleSubmit(event) {
    event.preventDefault()
    let costInput = document.querySelector('input').value
    let yourValueInput = document.querySelector('select[name="your-value"]').value
    let friendValueInput = document.querySelector('select[name="friend-value"]').value
    return console.log(handleTotalTipCalculation(costInput, yourValueInput, friendValueInput))
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
          You Pay ${'total'} (${'cost'} + ${'totalTip'} tip)
        </h3>
      </div>

      <div>
        <button type="reset">Reset</button>
      </div>

    </form>
  )

}