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
    <Part osa={parts.parts[0].name} tehtävä={parts.parts[0].exercises} />
    <Part osa={parts.parts[1].name} tehtävä={parts.parts[1].exercises} />
    <Part osa={parts.parts[2].name} tehtävä={parts.parts[2].exercises} />
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
  return (
    <div>
      <p>Number of exercises: {parts.parts[0].exercises + parts.parts[1].exercises + parts.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  console.log(course)
  console.log(course.parts[0])
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))

