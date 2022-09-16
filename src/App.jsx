import React, { useState } from "react";
import "./App.css";
import Container from "./Container";

// ------------------------ App Functional Component -----------------------------


function App() {
  // Input on the screen
  const [input, setInput] = useState("");

  return (
    <>
      <div className="container">
        {/* Represents the screen element of the Calculator */}
        <div className="screen-input">
          <input
            value={input}     /* Input/result on the screen and result */
            autoFocus
            type="text"
          />
        </div>
        {/* Represents the body element of the Calculator other than screen */}
        <Container input={input} setInput={setInput} />
        {/* Passing input string and setinput function to container element */}
      </div>
    </>
  );
}

export default App;
