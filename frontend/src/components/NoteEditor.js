import React, { Component } from 'react';

class NoteEditor extends Component {
  render() { 
    let {selectedNote} = this.props;   
    return (
      <form className="note-editor">
        <input type="text" name="title" value = {selectedNote.title}/>
        <textarea name="body" value = {selectedNote.body}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
