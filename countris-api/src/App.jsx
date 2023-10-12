import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  const [data, setData] = useState([])
  
    const getData = async () => {
      const res = await fetch('https://restcountries.com/v3.1/all');
      const datos = await res.json();
      setData(datos)
    }

  useEffect(() =>{
    getData()
  }, [])

console.log(data)


  return (
    <main>
      {data.map((el, key)=>( 
        <div className='card-container' key={key}>
          <div>
            <img src={el.flags.svg} alt="" />
          </div>
          <div>
          <h1>{el.name.common}</h1>
          <div>
          <span>Population: {el.population}</span>
          <span>Region: {el.region}</span>
          <span>Capital: {el.capital}</span>  
          </div>
          </div>
        </div>
      ))} 
      
          {/* <div className='card-container'>
          <div>
            <img src={data.flags[0]} alt="" />
          </div>
          <div className='text-container'>
          <h1>{data.name}Germany</h1>
          <div>
          <p>Population: {data.population}</p>
          <p>Region: {data.region}</p>
          <p>Capital: {data.capital}</p>  
          </div>
          </div>
        </div> */}
      
    </main>
  )

}
export default App
