import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  const {selectedNote, onClickNoteViewerEditButtonHandler} = props;
  
  return (
    <Fragment>
      <h2>{selectedNote.title}</h2>
      <p>{selectedNote.body}}</p>
      <button onClick = {onClickNoteViewerEditButtonHandler}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
