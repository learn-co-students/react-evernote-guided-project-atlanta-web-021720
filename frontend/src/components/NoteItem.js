import React from 'react';

const NoteItem = (props) => {
  const {note, onClickNoteItemHandler} = props;
  
  const sliecBody = (string) =>
  {
    return (string.length <19 ? string : `${string.slice(0,18)}...`)
  }

  // return (<li onClick ={()=>{console.log(note); onClickNoteItemHandler(note)}}> 
  return (<li onClick ={()=>{onClickNoteItemHandler(note)}}> 
    {/* <h2>{props.note.title}</h2>
    <p>{props.note.body}</p> */}
    <h2>{note && note.title}</h2>
    <p>{note && sliecBody(note.body)}</p>
  </li>)
}

export default NoteItem;
