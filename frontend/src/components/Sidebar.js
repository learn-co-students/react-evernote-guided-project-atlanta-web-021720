import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    const {notes, onClickNoteItemHandler, onClickNewButtonHandler} = this.props;
    return (
      <div className='master-detail-element sidebar'>
        <NoteList notes={notes}
                  onClickNoteItemHandler = {onClickNoteItemHandler}
        />
        <button onClick = {onClickNewButtonHandler}>New</button>
      </div>
    );
  }
}

export default Sidebar;
