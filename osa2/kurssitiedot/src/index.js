import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
  <>
    <h1>{props.course}</h1>
  </>
  )
}

const Content = (parts) => {
  return (
  <>
    <Part osa={parts.parts.name} tehtävä={parts.parts.exercises}/>
  </>
  )
}

const Part = (parts) => {

  return (
    <>
      <p>{parts.osa} {parts.tehtävä}</p>
    </>
  )
}

const Total = (parts) => {

  console.log(parts)
  const result = parts.parts.reduce((x, y) => x = x + y.exercises, 0)
  console.log(result)
  return (
    <>
      {result}
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack Application Development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Testi',
        exercises: 18,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course}/>
    </div>
  )
}

const Course = (props) => {
  return (
    <>
      <Header course={props.course.name}/>
      {props.course.parts.map(part => 
        <Content key={part.id} parts={part}/>
      )}
      Number of exercises: <Total parts={props.course.parts}/>
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))

