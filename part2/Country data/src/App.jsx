import {useEffect, useState } from 'react';
import axios from 'axios' 
import Filter from './Components/Filter.jsx'

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newCountry, setNewCountry] = useState('')
  const [searchedCountry,setSearchedCountry]=useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {  
        setCountries(response.data)
        console.log('promise fulfilled')
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, [])
  
  return (
    <>
      <h2>Countries</h2>
      <Filter searchedCountry={searchedCountry} setSearchedCountry={setSearchedCountry} countries={countries}/>
      
    </>
  );
};


export default App;
