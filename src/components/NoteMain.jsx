import React, { useState, useEffect } from "react";
import "../styles.css";
import { nanoid } from 'nanoid';
import NotesList from './NotesList';
import Search from './Search';


function NoteMain(props) {
 
  // NOTE TAKING start
    // create a state and put a default value
    const [notes, setNotes] = useState([
      {
        id: nanoid(),
        text: 'This is my first note!',
        date: '15/04/2021',
      }
    ]);
    // state for search box
    const [searchText, setSearchText] = useState('');

    // save data in localstorge using useEffect
    // retrieve the data from localstorage
    useEffect(() => {
      const savedNotes = JSON.parse(
        localStorage.getItem('react-notes-app-data')
      );
      // 
      if (savedNotes) {
        setNotes(savedNotes);
      }
    }, []);
    //save the data when the array was changed  
    useEffect(() => {
      localStorage.setItem(
        'react-notes-app-data',
        JSON.stringify(notes)
      );
    }, [notes]);

    // adding a note
    const addNote = (text) => {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString(),
      };
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
    };
    // delete a node 
    const deleteNote = (id) => {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
    };

  // NOTE TAKING end 
  return (
        // NOTE TAKING start View
        <div className='container'>
            <h1>Note Taking</h1>
            {/* <MarkdownMain/> */}
            <Search handleSearchNote={setSearchText} />
            <NotesList
            notes={notes.filter((note) =>
                note.text.toLowerCase().includes(searchText)
            )}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
            />
        </div>
        // NOTE TAKING end view 
  );
}
export default NoteMain;
