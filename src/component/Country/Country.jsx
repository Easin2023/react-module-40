const Country = ({ country }) => {
  const { name, flags, flag, cca2, cca3 } = country;
  console.log(country);
  return (
    <div style={{ border: "2px solid black", textAlign: "center" }}>
      <h2>Country Name: {name.common}</h2>
      <img src={flags.png} alt="" />
      <p style={{fontSize:'30px'}}>{cca2}</p>
    </div>
  );
};

export default Country;
