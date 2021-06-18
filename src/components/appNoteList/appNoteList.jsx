import React, { Component } from 'react';
import OneNote from './../common/oneNote/oneNote';

class AppNoteList extends Component {
    state = {  }
    render() { 
        return ( 
        <div className='note-list'>
            {this.props.notes.map((n) =>(
                 <OneNote key={n._id}/> 
        ))}
        </div> 
        );
    }
}
 
export default AppNoteList;