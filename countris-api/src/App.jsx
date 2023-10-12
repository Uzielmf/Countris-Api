import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  const [data, setData] = useState([])
  const [searchCountry, setSearchCountry] = useState("");

  const [countrySerch, setCountrySearch] = useState([])

  const getData = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const datos = await res.json();
    setData(datos);
    setCountrySearch(datos)
    console.log(data);

  const [dark, setDark] = useState(false);

  useEffect(() =>{
    getData()
  }, [])

  const handleBtnDark = () => {
    setDark(!dark);
    console.log(dark);

  };

  useEffect(() => {
    if (dark) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      // const dark = document.getElementById("dark");
      // dark.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
      // const dark = document.getElementById("dark");
      // dark.style.backgroundColor = "black";
    }

    console.log("first");
  }, [dark]);

  const filterCountries = data.filter((country) =>
    country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
  );


  const countriesFilter = (continent) =>{
   const filtrado = countrySerch.filter((country) => country.region.toLowerCase() == continent)
   return filtrado
  }

  const handleContinentFilter = (e)=>{
    console.log('funciona')
    const continent = document.getElementById('continentes').value
    const filtrado = countriesFilter(continent)
    setCountrySearch(filtrado)
    setData(filtrado)
  }

console.log(data)



  return (
    <>
      <header className="col-12 p-0 m-0 ">
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-2 mb-5">
          <div className="container-fluid">
            <a className="navbar-brand " href="#">
              Where in the world?
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="col-2" onClick={handleBtnDark}>
            <i className="fa-regular fa-moon"></i> Dark Mode
          </div>
        </nav>
      </header>

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
        <button onClick={handleContinentFilter}>Search</button>
          <select id="continentes" className="form-select" aria-label="Default select example">
            <option selected>Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>
      </div>
      <div className='cards-container'>
      {filterCountries.map((el, key)=>( 
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
      
    </>
  )
      }
}
export default App
  
          
