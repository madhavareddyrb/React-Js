import { useState } from 'react'

import './App.css'
function App() {
  
  /*let counter = 15

  const addValue = () => {
    counter++;
    console.log(counter);   
   }
   const removeCounter = () => {
    counter--;
    console.log(counter);
    
   }*/

  const [counter, setCounter] = useState(10) // hooks here counter(variable), setCounter(method) we must call method to access variable
  /*
  const addValue = () => {
    setCounter(counter+1);
  }
  const removeCounter = () => {
    setCounter(counter - 1);
  }
  */

/*
 const addValue = () => {
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
  } // here we can't update all at a time this is know has banching react upates one by one to avoid this we use callbacks
  
  */

  const addValue = () => {
    setCounter( (preCounter) => preCounter + 1);
    setCounter( (preCounter) => preCounter + 1);
    setCounter( (preCounter) => preCounter + 1);
    setCounter( (preCounter) => preCounter + 1);

  }
const removeCounter = () => {
  setCounter( (reCounter) => reCounter - 1)
  setCounter( (reCounter) => reCounter - 1)
  setCounter( (reCounter) => reCounter - 1)

}

  return (
    <>
      <h1>Learning React:{counter}   this is know as variable injection </h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick = {addValue} >Add Value</button> {}
      <button onClick={removeCounter}>Remove Value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
