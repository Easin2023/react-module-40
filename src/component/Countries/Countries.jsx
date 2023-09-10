import { useEffect } from "react";
import { useState } from "react";
import './Countries.css'
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountrise] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountrise(data));
  }, []);

  const handelVisitedCountry = Country => {
    console.log('visited country array radey')
  }

  return (
     <div>
      <div>
        
      </div>
      <div className="Countries-Container">
        
          {
            countries.map(country =>
               <Country country={country} 
               handelVisitedCountry={handelVisitedCountry}
               key={countries.cca2} ></Country>)
          }
      </div>
     </div>
  );
};

export default Countries;
