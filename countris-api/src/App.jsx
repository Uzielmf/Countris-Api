import { useState } from 'react'
import './App.css'
import useData from './services/useData'

function App() {
  const data = useData()
  console.log(data)
  return (
    <>
      {data.map((el,i)=>{
        <img src={el.flags}></img>
      })}
    </>
  )
}

export default App
