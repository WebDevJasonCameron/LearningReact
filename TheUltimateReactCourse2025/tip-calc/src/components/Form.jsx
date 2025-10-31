import React from 'react'
import { useState } from 'react'

import CostInput from "./CostInput.jsx";
import ValueInput from "./ValueInput.jsx";
import {Button} from "./Button.jsx";
import {Output} from "./Output.jsx";

export default function Form() {
  const [cost, setCost] = useState(0)
  const [yourValue, setYourValue] = useState(0)
  const [friendsValue, setFriendsValue] = useState(0)

  function handleSubmit(event) {
    event.preventDefault()
  }

  function onHandleCostChange(newCost) {
    setCost(newCost);
  }

  function onHandleYourValueChange(value) {
    setYourValue(value);
  }

  function onHandleFriendsValueChange(value) {
    setFriendsValue(value);
  }

  function onHandleReset() {
    setCost(0);
    setYourValue(0);
    setFriendsValue(0);
  }

  return (
    <form onSubmit={handleSubmit}>

      <CostInput
        onCostChange={onHandleCostChange} />
      <ValueInput
        onValueInput={onHandleYourValueChange}
        id="your-value"
        name="your-value"
        value={yourValue}
        message="How did you like the service? " />
      <ValueInput
        onValueInput={onHandleFriendsValueChange}
        id="friends-value"
        name="friends-value"
        value={friendsValue}
        message="How did your friend like the service? " />
      <Output
        cost={cost}
        yourValue={yourValue}
        friendsValue={friendsValue} />
      <Button
        onHandleReset={onHandleReset} />

    </form>
  )

}