import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [newName, setNewName] = useState('')

  const handleName= (e) => {
    setNewName(e.target.value)
  };

  const addName = (e) => {
    e.preventDefault()
    if (persons.find(person => person.name === newName))
    alert(`${newName} is already added to phonebook`)
    else { 
      const newPerson = {
      name: newName
      }
    setPersons(persons.concat(newPerson))
  }
    setNewName('')
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map((person) =>
        <p key={person.name}>{person.name}</p>)}
      
    </div>
  );
};

export default App;
