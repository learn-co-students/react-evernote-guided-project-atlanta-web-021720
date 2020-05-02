import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  const {notes} = props;

  return (
    <ul>
      {/* Render list of notes here... */}
      {/* <NoteItem note={notes[0]}/> */}
      {notes.map(note=><NoteItem key= {note.id} note={note} 
                                onClickNoteItemHandler = {props.onClickNoteItemHandler}
                        />)}
    </ul>
  );
}

export default NoteList;
