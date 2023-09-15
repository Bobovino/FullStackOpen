import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-12345567'}
  ]);
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleName= (e) => {
    setNewName(e.target.value)
  };
  const handleNumber= (e) => {
    setNewNumber(e.target.value)
  };

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
