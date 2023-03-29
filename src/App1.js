import React from "react";
import { useState } from "react";

function App1() {
  //   const [age, setAge] = useState(0);
  //   //   const age = 0;
  //   const increaseAge = () => {
  //     setAge(age + 1);
  //   };

  const [inputValue, setInputValue] = useState("");
  const [showText, setShowText] = useState(false);

  const hadleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const togle = () => {
    setShowText(!showText);
  };
  return (
    <div className="App">
      {/* {age}
      <button onClick={increaseAge}>Increase Age</button> */}
      <input type="text" onChange={hadleInputChange} />
      <br />
      {/* {inputValue} */}
      <button onClick={togle}>show/hide</button>
      <br />
      {showText === true ? <h3>Tampilkan </h3> : ""}
    </div>
  );
}

export default App1;
