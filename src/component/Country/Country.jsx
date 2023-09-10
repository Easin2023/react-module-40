import { useCallback, useState } from 'react';
import './Country.css'
const Country = ({ country,handelVisitedCountry }) => {
  const { name, flags, flag, cca2, cca3 } = country;

  const [visited, setVisited] = useState(false)

  const VisitButton = () => {
     setVisited(!visited)
  }
  
  return (
    <div className={`cart ${visited ? 'visited' : 'non-visited'}`}>
      <h2>Country Name: {name.common}</h2>
      <img src={flags.png} alt="" />
      <p style={{fontSize:'30px'}}>{cca2}</p>
      <button onClick={handelVisitedCountry} className="button">Mark Country</button>
      <br />
      <button onClick={VisitButton} className="button">{visited ? 'Visit' : 'Going'}</button>
      {visited ? 'I visited country': 'Visit this country'}
    </div>
  );
};

export default Country;
