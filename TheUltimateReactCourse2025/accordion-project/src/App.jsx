import React from 'react'
import './App.css'

function App() {

  const faqs = [
    {
      title: "Where are these chairs assembled?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: " How long do I have to return my chair",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: " Do you ship to countries outside the EU?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }

  ]

  return (
    <div>
      <Accordion />
    </div>
  )
}

function Accordion() {
  return (
    <div>
      TODO
    </div>
  )
}

function AccordionItem({num, title, text}) {

}

export default App
