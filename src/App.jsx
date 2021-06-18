import React, { Component } from 'react';
import AppNavbar from './components/appNavbar/appNavbar';
import AppAside from './components/appAside/appAside';
import AppAddNote from './components/appAddNote/appAddNote';
import AppNoteList from './components/appNoteList/appNoteList';
import './App.css';
class App extends Component {
  state = {
    notes: [],
    noteId: 1,
  };

  handleNewNote = (newNote) => {
    //{_id, title, body, isPinned}
    const newNoteObj = this.createNewNote(newNote)
    console.log(newNoteObj);

    const notesCopy = [...this.state.notes, newNoteObj]

    this.setState({notes: notesCopy, noteId: this.state.noteId +1})
  };

  createNewNote(newNote){
    return {_id:this.state.noteId, ...newNote, isPinned:false}
  }


  render() {
    return (
      <div className="App">
        <AppNavbar />
        <AppAside />
        <AppAddNote onNewNote={this.handleNewNote} />
        <AppNoteList />
      </div>
    );
  }
}

export default App;