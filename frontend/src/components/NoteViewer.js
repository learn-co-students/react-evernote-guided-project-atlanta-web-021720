import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  const {selectedNote, onClickNoteViewerEditButtonHandler,onClickNoteViewerEditDeleteHandler} = props;
  
  return (
    <Fragment>
      <h2>{selectedNote.title}</h2>
      <p>{selectedNote.body}</p>
      <button onClick = {onClickNoteViewerEditButtonHandler}>Edit</button>
      <button onClick = {()=>{onClickNoteViewerEditDeleteHandler(selectedNote)}}>Delete</button>
      {/* <button onClick = {null}>Delete</button> */}
    </Fragment>
  );
}

export default NoteViewer;
