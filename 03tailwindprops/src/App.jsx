import { use, useState } from 'react'

import './App.css'
import Card from './components/Card.jsx'

function App() {

  let myObj = {
    name : 'madhava',
    age : 24,
    state: "Ap",
  }
  return (
    <>
      <h1 className="text-3xl rounded-md bg-green-500 ">Vite with Tailwind
      </h1>
     <Card username = "Bala" />
     <Card posts = "Staff Engg" usernmae = "Shiva"/>
     <Card position = "mern stack"  myarr = {myObj}/>

    </>
  )
}

export default App
