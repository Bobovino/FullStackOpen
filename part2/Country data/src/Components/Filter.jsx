import { useState, useEffect } from 'react';
import Weather from './Weather'

const Filter = ({ searchedCountry, setSearchedCountry, countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const newFilteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchedCountry.toLowerCase())
    );

    setFilteredCountries(newFilteredCountries);

    if (newFilteredCountries.length === 1) {
      setSelectedCountry(newFilteredCountries[0]);
    } else {
      setSelectedCountry(null);
    }
  }, [searchedCountry, countries]);

  const handleSearch = (e) => {
    setSearchedCountry(e.target.value);
  };

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  const renderCountries = () => {
    if (selectedCountry) {
      return (
        <>
          <h1>{selectedCountry.name.common}</h1>
          <p>Capital: {selectedCountry.capital}</p>
          <p>Population: {selectedCountry.population}</p>
          {Object.keys(selectedCountry.languages).map((key, index) => (
            <h3 key={index}>{selectedCountry.languages[key]}</h3>
          ))}
          <img src={selectedCountry.flags.png} alt="Country Flag" />
          <Weather selectedCountry={selectedCountry}/>
        </>
      );
    }

    if (filteredCountries.length > 10) {
      return <p>Too many results, be more specific</p>;
    } else if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
      return (
        <>
          {filteredCountries.map((country) => (
            <div key={country.name.common}>
              <span>{country.name.common}</span>
              <button onClick={() => handleSelectCountry(country)}>Show</button>
            </div>
          ))}
        </>
      );
    }
    return null;
  };

  return (
    <>
      <div>
        Find countries by name: <input value={searchedCountry} onChange={handleSearch} />
      </div>
      {renderCountries()}
    </>
  );
};

export default Filter;

