import React, { Component } from 'react';
import './style.css';

class OneNote extends Component {
  state = {};
  render() {
    const { _id, title, body } = this.props;
    return (
      <div key={_id} className='one-note'>
        <h3>{title}</h3>
        <h4>{body}</h4>
      </div>
    );
  }
}

export default OneNote;