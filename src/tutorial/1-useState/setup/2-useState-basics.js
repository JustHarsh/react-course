import React, { useState } from 'react';

const UseStateBasics = () => {

  const [text, setText] = useState("Random Title")

  const handleClick = () => {
    if (text === 'Random Title') {
      setText("Idli Sambhar")
    } else {
      setText("Random Title")
    }
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  
    );
};

export default UseStateBasics;
