import { useState } from "react";
import Crud from './Crud.jsx'

const Form=({persons,setPersons,showNotification})=>{

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

    const addPerson = (e) => {
        e.preventDefault()

        const existingPerson=persons.find(person => person.name === newName || person.number===newNumber)

        if (existingPerson){
        if (window.confirm(`${newName} ya está agregado en la agenda, ¿desea actualizar el número?`)) {
          const updatedPerson = { ...existingPerson, number: newNumber };
          
          Crud.update(existingPerson.id, updatedPerson)
            .then((response) => {
              setPersons(persons.map((person) => person.id !== existingPerson.id ? person : response.data));
              setNewName('');
              setNewNumber('');
              showNotification(`Updating ${updatedPerson.name}`)

            })
            .catch((error) => {
              console.log('Error al actualizar la persona:', error);
            });
        }
      }
        else { 
          const newPerson = {
          name: newName,
          number:newNumber
          }

          Crud
          .create(newPerson)
          .then(response => {
            setPersons(persons.concat(response.data));
            setNewName('')
            setNewNumber('')
            showNotification(`Adding new person ${newPerson.name}`)
          })
          .catch(error => {
            console.log('Error al agregar la persona:', error)
          })
      }
    }
    
    return(<>
    <h2>Add new person</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={e=>setNewName(e.target.value)} />
        </div>
        <div>number: <input value={newNumber} onChange={e=>setNewNumber(e.target.value)}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    
    
    </>)
    
    }
    
    export default Form