import { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood=() =>{
    return setGood(good+1)
  }

  const incrementNeutral=() =>{
    return setNeutral(neutral+1)
  }

  const incrementBad=() =>{
    return setBad(bad+1)
  }

  const total=() =>{
    return good+neutral+bad
  }

  const mean=() =>{
    return (good-bad)/total()
  }

  const positivePercent=() =>{
    return (good/total())*100
  }


  return (
    <>
    <h1>
      Give feedback
    </h1>  
    <div>
      <button onClick={incrementGood}>Good</button>
      <button onClick={incrementNeutral}>Neutral</button>
      <button onClick={incrementBad}>Bad</button>

    </div>
    <h1>
      Statistics
    </h1> 
    <p>good, {good}</p>
    <p>neutral, {neutral}</p>
    <p>bad, {bad}</p>
    <p>total, {total()}</p>
    <p>average, {mean()}</p>
    <p>positive, {positivePercent()}%</p>
    </>
  )
}

export default App;
