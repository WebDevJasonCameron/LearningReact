import React from "react";

export default function ValueInput() {
  return (
    <div>
      <label htmlFor="your-value">How did you like the service? </label>
      <select name="your-value" id="your-value">
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">It was very good (15%)</option>
        <option value="30">It was amazing (30%)</option>
      </select>
    </div>
  )
}