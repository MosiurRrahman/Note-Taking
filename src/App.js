import React, { useState } from 'react'
import Count from './Componenets/Count'
import CreateArea from './Componenets/CreateArea'
import Header from './Componenets/Header'
import Note from './Componenets/Note'

const App = () => {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });
  }
  function emtyNote(params) {
    
  }
  return (
    <div>
      <Header/>
      <Count count = {notes.length === 0? "Empty Note": `Showing ${notes.length} Notes`}/>
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete = {deleteNotes}
          emnty = {emtyNote}
          
        />
      ))}
    </div>
  )
}

export default App
