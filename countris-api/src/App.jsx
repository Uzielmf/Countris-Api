import { useEffect, useState } from 'react'
import './App.css'
import useData from './services/useData'

function App() {
  const [data, setData] = useState(null)
  
    const getData = async () => {
      const res = await fetch('https://restcountries.com/v3.1/all');
      const datos = await res.json();
      setData(datos)
    }

    useEffect(() =>{
    getData()
  }, [])

  return data;
}

  return (
    <>
     
    </>
  )


export default App
