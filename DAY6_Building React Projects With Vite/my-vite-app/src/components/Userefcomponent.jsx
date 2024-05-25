import { useState,useRef } from 'react'
import React from 'react'

function Useref() {
  const inputRef = useRef(null);

  // Function to handle input change
  const handleInputChange = () => {
    // Retrieve the current value of the input field using the ref
    const inputValue = inputRef.current.value;
    // Display the current value in real-time
    document.getElementById('para').innerText=inputValue
    console.log(inputValue); // You can replace this with your own display logic
  };

  return (
    <div>
      {/* Use the ref to bind the input element */}
      <input type="text" ref={inputRef} onChange={handleInputChange} />
      <p id='para'></p>
    </div>
  );
}

export default Useref;