import { useState } from "react"

const Filter=({persons})=>{

  const [searchedName,setSearchedName]=useState('')

  const findPerson = () => {
    if (persons) { 
      const foundPerson = persons.find(person => 
        person && person.name && person.name.toLowerCase() === searchedName.toLowerCase()
      );
      if (foundPerson) {
        return <p key={foundPerson.id}>{foundPerson.name} {foundPerson.number}</p>;
      }
    }
    return null;
  };
  

return(<>
        <div>Filter by name: <input value={searchedName} onChange={(e)=>setSearchedName(e.target.value)} /></div>
        {findPerson()}


</>)

}

export default Filter