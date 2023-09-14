import { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const App = () => {
  const [selected, setSelected] = useState(0)
  const [points,setPoints]=useState(new Array(anecdotes.length).fill(0))
  
  const addPoints = () => {
    const newPoints=[...points]
    newPoints[selected] += 1;
    setPoints(newPoints);
  };

  const generateRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };
  
  return (
    <div>
      <button  onClick={generateRandomAnecdote}> Generate random anecdote</button>
      <p>{anecdotes[selected]}</p> 
      <button  onClick={addPoints} > Rate anecdote</button>
      <p>{points[selected]}</p>
    </div>
  )
}

export default App
