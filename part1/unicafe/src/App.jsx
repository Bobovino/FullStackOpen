import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const StatisticLine=({text,value})=>{
  if (text=="positive") return (<tr><td>{text}</td><td>{value} %</td></tr>)
  return (<tr><td>{text}</td><td>{value}</td></tr>)
 
}

// eslint-disable-next-line react/prop-types
const Statistics=({ good, neutral, bad, total, mean, positivePercent })=>{ 

  if (total() === 0) return (<>
  <h1>
    Statistics
  </h1> 
  <p>No feedback given</p> 
  </>)

  return (
  <>
    <h1>
      Statistics
    </h1> 

    <table>  
      <tbody>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <StatisticLine text="total" value ={total()} />
        <StatisticLine text="mean" value ={mean()} />
        <StatisticLine text="positive" value ={positivePercent()} />
      </tbody>
    </table>
</>)
}


// eslint-disable-next-line react/prop-types
const Button=({text,handleClick})=>{
  return <button onClick={handleClick}>{text}</button>;
}




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
      <Button text="Good" handleClick={incrementGood} ></Button>
      <Button text="Neutral" handleClick={incrementNeutral}></Button>
      <Button text="Bad" handleClick={incrementBad}></Button>

    </div>
    <Statistics 
      good={good}
      bad={bad}
      neutral={neutral}
      total={total}
      mean={mean}
      positivePercent={positivePercent}
    />
    
    </>
  )
}

export default App;
