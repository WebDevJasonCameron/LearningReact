import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>Hello, world!</h1>;
}

const root = ReactDOM.root(document.getElementById('root'));
root.render(<App />);