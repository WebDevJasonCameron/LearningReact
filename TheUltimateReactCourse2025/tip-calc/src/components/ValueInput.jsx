import React from "react";

export default function ValueInput({ message, id, name, value, onValueInput }) {

  function handleChange(e) {
    onValueInput(Number(e.target.value));
  }

  return (
    <div>
      <label htmlFor="your-value">{message} </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={handleChange}>
        <option value={0}>Select a value</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={15}>It was very good (15%)</option>
        <option value={30}>It was amazing (30%)</option>
      </select>
    </div>
  )
}