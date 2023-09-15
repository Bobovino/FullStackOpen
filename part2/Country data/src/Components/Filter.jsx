
const Filter=({searchedCountry,setSearchedCountry,countries})=>{

const handleSearch=(e)=>{
  setSearchedCountry(e.target.value)
  }

  const findCountries=()=>{
    if (!countries || countries.length === 0) {
      return <p>Loading countries...</p>;
    }
    const filteredCountries = countries.filter(country => 
      country.name.common.toLowerCase().includes(searchedCountry.toLowerCase()))

    if (filteredCountries.length==0) return <p>Loading countries...</p>
      
    if (filteredCountries.length>10)return <p >Too many results, be more specific</p>
    else if (filteredCountries.length<=10 && filteredCountries.length>1) 
    return <>{filteredCountries.map(country => <p key={country.name.common}>{country.name.common}</p>)}</>
    return <>
    <h1>{filteredCountries[0].name.common}</h1>
    <p>Capital: {filteredCountries[0].capital}</p>
    <p>Population: {filteredCountries[0].population}</p>
    <h3>Languages</h3>
    {Object.keys(filteredCountries[0].languages).map((key, index) => <p key={index}>{filteredCountries[0].languages[key]}</p>)}
    <img src={filteredCountries[0].flags.png}></img>
    </>
    
  }

return(<>
        <div>Find countries by name: <input value={searchedCountry} onChange={handleSearch} /></div>
        {findCountries()}
</>)

}

export default Filter