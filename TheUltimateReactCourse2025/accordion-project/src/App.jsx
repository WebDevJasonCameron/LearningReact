import React, {useState} from 'react'
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
  ];

  return (
    <div>
      <Accordion data={faqs}/>
    </div>
  )
}

function Accordion({ data }) {
  const [curOpen, setIsCurOpen] = useState(null)

  return (
    <div className="accordion">
      { data.map((el, i) =>
        <AccordionItem
          curOpen={curOpen}
          onOpen={setIsCurOpen}
          title={el.title}
          key={i}
          num={i}
        >
          {el.text}
        </AccordionItem>
      )}
    </div>
  )
}

function AccordionItem({ num, title, curOpen, onOpen, children: text }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    if (isOpen === num) {
      return onOpen(null);
    } else {
      return onOpen(num);
    }
  }

  return(
    <div className={`item ${isOpen ? 'open' : ''}`}
      onClick={handleToggle} >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon" >
        {
          isOpen ? <span>&#10005;</span> : <span>&#10095;</span>
        }
      </p>
      { isOpen && <div className="content-box">
        {text}
      </div> }
    </div>
  )
}

export default App
