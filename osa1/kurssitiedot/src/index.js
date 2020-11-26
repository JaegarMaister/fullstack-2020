import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
  <>
    <h1>{props.course}</h1>
  </>
  )
}

const Content = (props) => {
  return (
  <>
    <Part osa={props.part1.name} tehtävä={props.part1.exercises} />
    <Part osa={props.part2.name} tehtävä={props.part2.exercises} />
    <Part osa={props.part3.name} tehtävä={props.part3.exercises} />
  </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.osa} {props.tehtävä}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises: {props.exercises} </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  }

  const part2 = { 
    name: 'Using props to pass data',
    exercises: 7,
  }

  const part3 = { 
    name: 'State of a component',
    exercises: 14,
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercises={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))

