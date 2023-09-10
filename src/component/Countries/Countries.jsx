import { useEffect } from "react";
import { useState } from "react";
import './Countries.css'
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountrise] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountrise(data));
  }, []);

  return (
     <div className="Countries-Container">
          {
            countries.map(country => <Country country={country} key={countries.cca2} ></Country>)
          }
     </div>
  );
};

export default Countries;
