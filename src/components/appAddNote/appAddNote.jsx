import React, { Component } from 'react';
import Card from '../common/card/card'
import './style.css';

class AppAddNote extends Component {
  state = {
    newNote: {
      title: '',
      body: '',
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onNewNote(this.state.newNote);
    this.setState({newNote: {title: '', body: ''}})
};

  syncInput = (e) => {
    // console.log(e.target.name);
    this.setState({ newNote: { ...this.state.newNote, [e.target.name]: e.target.value } });
  };

  render() {
    const { newNote } = this.state;
    return (
      <div className="add-note">
        <Card raised>
        <div className="inner-note">
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <input
              value={newNote.title}
              onChange={this.syncInput}
              className="input"
              name="title"
              type="text"
              placeholder="Title"
            />
            <textarea
              value={newNote.body}
              onChange={this.syncInput}
              className="input textarea"
              name="body"
              placeholder="Take a note..."
            ></textarea>
            <button className="link-like" type="submit">
              Close
            </button>
          </form>
        </div>
        </Card>
      </div>
    );
  }
}

export default AppAddNote;