import React, { Component } from 'react';

class NoteEditor extends Component {

  state = {
    note: this.props.selectedNote
  }
  
  // onChangeNoteEditorTitleHandler =(event) =>
  // {
  //   let title = event.target.value;
  //   this.setState(prevState=>({
  //     note: {...prevState.note,
  //     title: title
  //     }
  //   }))
  // }

  // onChangeNoteEditorBodyHandler = (event) =>
  // {
  //   let body = event.target.value;
  //   this.setState(prevState=>({
  //     note: {...prevState.note,
  //     body: body
  //     }
  //   }))
  // }

  onChangeNoteEditorHandler = (event) =>
  {
    const value = event.target.value;
    const name = event.target.name;
    this.setState(prevState=>({
      note: {...prevState.note,
      [name]: value
      }
    }))
  }

  render() { 
    // const {selectedNote, onChangeNoteEditorTitleHandler, onChangeNoteEditorBodyHandler} = this.props;   
    const {selectedNote,onClickNoteEditCancelButtonHandler,onClickNoteEditSaveButtonHandler} = this.props;   

    return (
      <form className="note-editor">
        {/* <input type="text" name="title" defaultValue = {selectedNote.title} onChange = {(event)=>onChangeNoteEditorTitleHandler(event)}/>
        <textarea name="body" defaultValue = {selectedNote.body} onChange = {(event)=>onChangeNoteEditorBodyHandler(event)}/> */}
        <input type="text" 
              name="title" 
              defaultValue = {selectedNote.title} 
              onChange = {(event)=>this.onChangeNoteEditorHandler(event)}
        />
        <textarea name="body" 
                  defaultValue = {selectedNote.body} 
                  onChange = {(event)=>this.onChangeNoteEditorHandler(event)}
        />

        <div className="button-row">
          <input className="button" type="submit" value="Save" onClick = {(event)=>{onClickNoteEditSaveButtonHandler(event,this.state.note)}}/>
          <button type="button" onClick = {onClickNoteEditCancelButtonHandler}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
