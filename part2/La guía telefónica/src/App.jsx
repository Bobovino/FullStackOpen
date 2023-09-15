import { useState } from 'react';
import Filter from './Components/Filter.jsx'
import Form from './Components/Form.jsx'
import Persons from './Components/Persons.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchedName,setSearchedName]=useState('')
  
  return (
    <>
      <h2>Phonebook</h2>
      <Filter searchedName={searchedName} setSearchedName={setSearchedName} persons={persons}/>
        
      <Form persons={persons} newName={newName} newNumber={newNumber} 
      setPersons={setPersons} setNewName={setNewName} setNewNumber={setNewNumber} />
      
      <Persons persons={persons}/>
    </>
  );
};


export default App;
