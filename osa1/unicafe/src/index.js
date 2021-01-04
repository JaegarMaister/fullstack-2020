import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Statistics = (props) => {
  if (props.allClicks.length == 0) {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  
  return (
    <>
      <h1>Statistics</h1>
      <StatisticsLine text="Good" value={props.good}/>
      <StatisticsLine text="Neutral" value={props.neutral}/>
      <StatisticsLine text="Bad" value={props.bad}/>
      <StatisticsLine text="All" value={props.good + props.neutral + props.bad}/>
      <StatisticsLine text="Average" value={(props.good + (props.neutral * 0) + (props.bad * -1)) / (props.good + props.neutral + props.bad)}/>
      <StatisticsLine text="Positive" value={(props.good / (props.good + props.neutral + props.bad) * 100)}/>
    </>
  )
}

const StatisticsLine = (props) => {
  if (props.text == "Positive") {
    return (
      <>
        <p>{props.text}: {props.value} %</p>
      </>
    )
  }

  return (
    <>
      <p>{props.text}: {props.value}</p>
    </>
  )
}

const Button = (props) => {
  return (
    <>
      <button onClick={props.handle}>
          {props.text}
      </button>
    </>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    setAll(allClicks.concat('G'))
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat('N'))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks.concat('B'))
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handle={handleGoodClick} text="Good"/>
      <Button handle={handleNeutralClick} text="Neutral"/>
      <Button handle={handleBadClick} text="Bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>
    </div>
  )

}


ReactDOM.render(<App />, 
  document.getElementById('root')
);

