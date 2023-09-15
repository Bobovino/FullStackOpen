import { useState } from 'react';

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

  const handleName= (e) => {
    setNewName(e.target.value)
  };
  const handleNumber= (e) => {
    setNewNumber(e.target.value)
  };
  const handleSearch=(e)=>{
    /* e.preventDefault() */
    setSearchedName(e.target.value)
  }

  const findPerson=()=>{
    if(persons.find(person => person.name.toLowerCase() === searchedName.toLowerCase() ))return<p key={searchedName}>{searchedName}</p>
    }
  
  

  const addPerson = (e) => {
    e.preventDefault()
    if (persons.find(person => person.name === newName || person.number===newNumber))
    alert(`${newName} is already added to phonebook`)
    else { 
      const newPerson = {
      name: newName,
      number:newNumber
      }
    setPersons(persons.concat(newPerson))
  }
    setNewName('')
    setNewNumber('')
  };
  
  return (
    <div>
      <h2>Phonebook</h2>
        <div>Filter by name: <input value={searchedName} onChange={handleSearch} /></div>
        {findPerson()}

      <h2>Add new person</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>number: <input value={newNumber} onChange={handleNumber}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map((person) =>
        <p key={person.name}>{person.name} {person.number}</p>)}
      
    </div>
  );
};


export default App;
