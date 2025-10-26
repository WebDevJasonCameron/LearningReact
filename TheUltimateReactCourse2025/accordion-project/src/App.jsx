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
      <Accordion data={faqs}/>
    </div>
  )
}

function Accordion({data}) {
  return (
    <div className="accordion">
      { data.map((el, i) =>
        <AccordionItem
          title={el.title}
          text={el.text}
          key={i}
          num={i} />)
      }
    </div>
  )
}

function AccordionItem({ num, title, text }) {
  return(
    <div className="item">
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">-</p>
      <div className="content-box">
        {text}
      </div>
    </div>
  )
}

export default App
