import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Idli',
    age: 567,
    message: 'Sambhar',
  })

  // const [name, setName] = useState('Idli')
  // const [age, setAge] = useState(567)
  // const [message, setMessage] = useState('Sambhar')

  const changeMessage = () => {
    if (person.message === 'Sambhar') { // message
      setPerson({...person, message: 'coconut chutney'})
      // setMessage('coconut chutney')
    } else {
      setPerson({...person, message:'Sambhar'})
      // setMessage('Sambhar')
    }

  }

  return (
    <>
      <h3>{person.name}</h3> {/* name*/}
      <h3>{person.age}</h3> {/* age */}
      <h3>{person.message}</h3> {/* message */}
      <button className='btn' onClick={changeMessage}>Change message</button>
    </>
  )
};

export default UseStateObject;
