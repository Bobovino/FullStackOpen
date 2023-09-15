import Crud from './Crud.jsx'

const Persons=({persons,setPersons})=>{

    const deletePerson = (id,name) => {
        if (window.confirm(`Eliminar ${name}?`)) {
          Crud.remove(id)
            .then(() => {
                setPersons(persons.filter(person => person.id !== id))
            })
            .catch(error => {
              console.log('Error al eliminar la persona:', error);
            });
        }
      };

    return(<>
           <h2>Numbers</h2>
        {persons.map((person) => <div key={person.id}>
        <p>{person.name} {person.number}</p>
        <button  onClick={() => deletePerson(person.id, person.name)}>Eliminar</button>
        </div>
        )
    }
    </>)
    
    }
    
    export default Persons