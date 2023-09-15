import { useEffect,useState } from 'react';
import Filter from './Components/Filter.jsx'
import Form from './Components/Form.jsx'
import Persons from './Components/Persons.jsx'
import Crud from './Components/Crud'

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
      Crud
      .getAll()
      .then(response => {
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
