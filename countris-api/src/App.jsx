import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  const [data, setData] = useState([])
  const [searchCountry, setSearchCountry] = useState("");
  
    const getData = async () => {
      const res = await fetch('https://restcountries.com/v3.1/all');
      const datos = await res.json();
      setData(datos)
    }

  useEffect(() =>{
    getData()
  }, [])

  const filterCountries = data.filter((country) =>
    country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
  );

console.log(data)


  return (
    <main>

      <div className="container ">
      <div className="d-flex justify-content-between">
        <div className="input-group mb-3 w-20" style={{ width: "20%" }}>
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <input
            type="text"
            className="form-control w-20"
            placeholder="Search for a country..."
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            onChange={(e) => setSearchCountry(e.target.value)}
          />
        </div>
        <div>
          <select className="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      </div>
      <div className='cards-container'>
      {data.map((el, key)=>( 
        <div className='card-container' key={key}>
          <div className='img-container' key={key}>
            <img src={el.flags.svg} alt="" className='img-flag'/>
          </div>
          <div className='text-container'>
          <h1 className='title-country'>{el.name.common}</h1>
          <div className='props-text'>
          <p><b>Population:</b> {el.population}</p>
          <p><b>Region:</b> {el.region}</p>
          <p><b>Capital:</b> {el.capital}</p>  
          </div>
          </div>
        </div>
      ))} 
      </div>
      
    </main>
  )

}
export default App

