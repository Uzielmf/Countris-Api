import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [dark, setDark] = useState(false);

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
            <div className="card col-3" style={{ width: "18rem" }} key={index}>
              <img src={country.flags.png} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
