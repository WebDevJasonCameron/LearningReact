import React from 'react'
import CostInput from "./CostInput.jsx";
import ValueInput from "./ValueInput.jsx";
import {Button} from "./Button.jsx";

export default function Form() {

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      const [cost, setCost] = useState(0)
      const [totalTip, setTotalTip] = useState(0)
      const [total, setTotal] = useState(0)
      const [yourValue, setYourValue] = useState(0)
      const [friendsValue, setFriendsValue] = useState(0)

      <CostInput />
      <ValueInput />
      <ValueInput />
      <Button />

    </form>
  )

}