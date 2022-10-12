import React, { useState } from "react";
import './styles/style.css';

const App = () => {
  //  Counter is a state initialized to 0
  const [counter, setCounter] = useState(0);

  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  }

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 1);
  }

  return (
    <div className="box">
      <h1>Counter</h1>
      <div className="buttons">
        <button onClick={handleClick1}>+</button>
        <div> {counter} </div>
        <button onClick={handleClick2}>-</button>
      </div>
    </div>
  );
}

export default App;