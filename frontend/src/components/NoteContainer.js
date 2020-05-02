import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

const url = 'http://localhost:3000/api/v1/notes'

class NoteContainer extends Component {
    
    state = {
    notes: [],
    searchFilter: '',
    selectedNote: {},
    isEdit: false
  }

  componentDidMount()
  {
    fetch(url)
    .then(res=>res.json())
    .then(data=>this.setState({notes: data}))
  }

  onClickNoteItemHandler = (note) =>
  {
    console.log(note)
    this.setState({selectedNote: note})
  }

  onClickNoteEditButtonHandler = () =>
  {
    console.log(this.state.isEdit)
    this.setState({isEdit: true})
  }

  onChangeNoteEditorTitleHandler(note)
  {

  }

  onChangeNoteEditorBodyHandler(note)
  {

  }


  render() {
    const {notes,selectedNote,isEdit} = this.state;
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={notes}
                  selectedNote =  {selectedNote}
                  onClickNoteItemHandler = {this.onClickNoteItemHandler}
          />
          <Content selectedNote={selectedNote} 
                  onClickNoteEditButtonHandler={this.onClickNoteEditButtonHandler}
                  onChangeNoteEditorTitleHandler={this.onChangeNoteEditorTitleHandler}
                  onChangeNoteEditorBodyHandler={this.onChangeNoteEditorBodyHandler}
                  isEdit = {isEdit}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
