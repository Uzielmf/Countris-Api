import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");

  const getData = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const datos = await res.json();
    setData(datos);
  };

  useEffect(() => {
    getData();
  }, []);

  const filterCountries = data.filter((country) =>
    country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
  );

  return (
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

      <h1>Buscar Países</h1>

      <div className="d-flex flex-wrap gap-2">
        {filterCountries.map((country, index) => (
          <div class="card col-3" style={{ width: "18rem" }} key={index}>
            <img src={country.flags.png} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
