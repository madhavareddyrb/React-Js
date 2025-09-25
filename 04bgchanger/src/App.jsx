import { useState } from 'react'

import './App.css'

function App() {
  const[color, setColor] = useState("blue")

   function changeColor(color){
    setColor(color)
   }
  return (
    <>
    <div className='w-full h-screen duration-200 justify-center flex justify-items-center text-fuchsia-500' style={{backgroundColor: color}} >Bg Changer
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

          <button
            onClick={() => changeColor("red")}
          /*onClick={() => setColor("red")}*/
           className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{backgroundColor: 'red'}}>
          Red
          </button>
          <button onClick={() => setColor('green')}  className='outline-none px-4 py-1 rounded-full shadow-2xl text-white' style={{backgroundColor: 'green'}}>Green</button>

          <button onClick={() => setColor('yellow')} className='outline-none px-4 y-1 rounded-b-full shadow-2xl text-black' style={{backgroundColor: 'yellow'}}> 
            Yellow
          </button>
        </div>
      </div>   

    </div>
<div className='flex h-screen w-screen flex-wrap justify-center rounded-b-full justify-items-center duration-200' style={{backgroundColor: color}}>
  <div className=" fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
  <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-black px-5 py-3 rounded-full'>
    <button onClick={() => setColor('white')} className='outline-none px-4 py-2 shadow-lg rounded-full text-black' style={{backgroundColor: 'white'}}>
      White
    </button>
    <button onClick={() => setColor('black')} className='outline-none px-4 py-2 shadow-lg rounded-full text-white' style={{backgroundColor: 'black'}}>
      Black
    </button>


  </div>
  </div>


</div>

    </>

  )
}

export default App

/* You cannot pass the function call directly, like onClick={changeColor("red")}, because it would execute the function immediately when the component renders, not only when the button is clicked.

You use an arrow function (() => changeColor("red")) to pass a function reference that only executes the changeColor("red") call when the click event actually occurs.*/

function Bgchnager(){
  const[color, setColor] = useState('olive')
  return (
    <div>
    </div>

  )
}
