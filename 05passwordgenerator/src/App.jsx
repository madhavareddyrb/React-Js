import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)
  const generatePassword = useCallback( () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed) str += "0123456789"
      if(charAllowed) str += "!@#$%^&*()+"

      for (let i = 1; i < length; i++) {
       const char = Math.floor(Math.random() * str.length + 1)
       pass += str.charAt(char)
      
      }
      setPassword(pass)

  },[length, numberAllowed, charAllowed])

const copyPasswordToClipboard = () => {window.navigator.clipboard.writeText(password)
  passwordRef.current?.select()
  //passwordRef.current?.setSelectionRange(0,8) 
}

 useEffect (() => {generatePassword()},[length, numberAllowed, charAllowed])


  return (
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-white-500' >
        <h1 className='text-white font-bold mb-2 text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-white text-orange'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />

          <button
          onClick={ () => {copyPasswordToClipboard()}} 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <input type="range"
            min={8}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}

             /> <label htmlFor="length">Length: {length}</label>

          </div>
          <div className='flex items-center gap-x-2'>
            <input type="checkbox"
            defaultChecked= {numberAllowed}
             onChange={() => {setnumberAllowed((prev) => !prev)}}
             /><label>numbers</label>

          </div>
          <div className='flex items-center gap-x-2'>
            <input 
            type="checkbox"
            defaultChecked = {charAllowed}
            onChange={ () => {setCharAllowed ((prev) => !prev)}}
            />
            <label htmlFor="charinpt">Character</label>
          </div>
        </div>

      </div>

  )

}

export default App
