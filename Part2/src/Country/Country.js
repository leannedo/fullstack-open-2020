import React, { useState, useEffect } from "react";
import axios from "axios";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [foundCountries, setFoundCountries] = useState([]);

  const hook = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      console.log(response.data);
      setCountries(response.data);
    });
  };

  useEffect(hook, []);

  const findMatchedCountries = (e) => {
    const keyword = e.target.value.toLowerCase();
    const result =
      keyword !== ""
        ? countries.filter((country) =>
            country.name.toLowerCase().includes(keyword)
          )
        : [];

    setFoundCountries(result);
  };

  const displayMatchedCountries = (arr) => {
    if (arr.length > 10) {
      return <p>Too many countries, please specify further</p>;
    } else if (arr.length > 1 && arr.length <= 10) {
      return (
        <div>
          {arr.map((el) => (
            <div>
              <p key={el.name}>{el.name}</p>
              <button>show</button>
            </div>
          ))}
        </div>
      );
    } else if (arr.length === 1) {
      console.log(arr[0]);
      const { name, capital, flag, population, languages } = arr[0];
      return (
        <div>
          <h3>{name}</h3>
          <h4>Capital {capital}</h4>
          <h4>Population{population}</h4>
          <h4>Language</h4>
          <ul>
            {languages.map((lang) => (
              <li>{lang.name}</li>
            ))}
          </ul>
          <img
            style={{ width: "200px", height: "200px" }}
            src={flag}
            alt="country flag"
          />
        </div>
      );
    }
  };

  return (
    <div>
      <h1>Find Country</h1>
      <div>
        find country <input type="text" onChange={findMatchedCountries} />
      </div>
      <h1>Result</h1>
      {displayMatchedCountries(foundCountries)}
    </div>
  );
};

export default Country;
