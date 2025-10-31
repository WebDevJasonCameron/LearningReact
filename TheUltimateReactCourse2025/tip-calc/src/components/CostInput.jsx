
export default function CostInput({ onCostChange }) {

  function handleChange(e) {
    const bill = e.target.value;

    // Allow only digits (and optional decimal point)
    const numericBill = bill.replace(/[^0-9.]/g, '');

    // Prevent more than one decimal point
    const cleanBill = numericBill.split('.').length > 2 ? numericBill.substring(0, numericBill.length - 1) : numericBill;

    onCostChange(cleanBill)
  }

  return (
    <div>
      <label htmlFor="bill">
        How much was the bill?
      </label>
      <input type="number"
             onChange={handleChange}/>
    </div>
  )
}