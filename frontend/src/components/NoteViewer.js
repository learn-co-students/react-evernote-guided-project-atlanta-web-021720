import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  const {selectedNote, onClickNoteEditButtonHandler} = props;
  
  return (
    <Fragment>
      <h2>{selectedNote.title}</h2>
      <p>{selectedNote.body}}</p>
      <button onClick = {onClickNoteEditButtonHandler}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
