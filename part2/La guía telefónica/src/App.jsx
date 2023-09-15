import {useEffect, useState } from 'react';
import axios from 'axios'
import Filter from './Components/Filter.jsx'
import Form from './Components/Form.jsx'
import Persons from './Components/Persons.jsx'

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:5000/persons/')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  
  return (
    <>
      <h2>Phonebook</h2>
      <Filter persons={persons} />
      <Form persons={persons} setPersons={setPersons}  />
      <Persons persons={persons}/>
    </>
  );
};


export default App;
