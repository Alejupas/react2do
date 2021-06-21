import React, { Component } from 'react';
import Card from '../card/card'
import './style.css';

class OneNote extends Component {
  state = {};
  render() {
    const { _id, title, body } = this.props;
    return (
      <Card>
        <h3>{title}</h3>
        <h4>{body}</h4>
      </Card>
        
    );
  }
}

export default OneNote;