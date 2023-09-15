import { useEffect,useState } from 'react';
import Filter from './Components/Filter.jsx'
import Form from './Components/Form.jsx'
import Persons from './Components/Persons.jsx'
import Crud from './Components/Crud'
import Notification from './Components/Notification'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [notification, setNotification] = useState(null);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

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

      <Notification message={notification} />

      <Form persons={persons} setPersons={setPersons} showNotification={showNotification}  />
      <Persons persons={persons} setPersons={setPersons}/>
    </>
  );
};


export default App;
