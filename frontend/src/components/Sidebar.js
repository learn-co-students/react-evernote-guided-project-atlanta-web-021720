import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    const {notes} = this.props;
    return (
      <div className='master-detail-element sidebar'>
        <NoteList notes={notes}
                  onClickNoteItemHandler = {this.props.onClickNoteItemHandler}
        />
        <button>New</button>
      </div>
    );
  }
}

export default Sidebar;
