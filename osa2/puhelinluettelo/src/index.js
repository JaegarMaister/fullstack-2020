import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Person = (person) => {
  console.log('Person', person)
  return (
    <>
      <p>{person.person.name}</p>
    </>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {
      name: newName
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  console.log(persons)
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <div>
          {persons.map(person => <Person key={person.name} person={person} />)}
        </div>
    </div>
  )

}


ReactDOM.render(<App />, document.getElementById('root'))
