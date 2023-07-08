/* eslint-disable no-unused-vars */
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const initialText = "BREAD";
  const [text, setText] = useState(initialText);

  const handleClick = () => {
    setText("LOADING...");

    setTimeout(() => {
      setText(initialText)
    }, 2000);
  }

  return (
    <>
      <div className="card">
        <p><h1>{text}</h1></p>
        <button onClick={handleClick}>Change the text</button>
      </div>
    </>
  )
}

export default App;
