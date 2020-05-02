import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';
import Adapter from './Adapter'
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
    // fetch(url)
    // .then(res=>res.json())
    // .then(data=>this.setState({notes: data}))
    Adapter.getData(url)
    .then(data=>this.setState({notes: data}))
  }

  onClickNoteItemHandler = (note) =>
  {
    console.log(note)
    this.setState({selectedNote: note, isEdit: false})
  }

  onClickNoteViewerEditButtonHandler = () =>
  {
    console.log(this.state.isEdit)
    this.setState({isEdit: true})
  }

  onClickNoteEditCancelButtonHandler = (event) =>
  {
    console.log('onClickNoteEditCancelButtonHandler')
  }

  onClickNoteEditSaveButtonHandler = (event,note) =>
  {
    event.preventDefault();
    console.log('onClickNoteEditSaveButtonHandler')
    Adapter.editData(url,note.id,note)
    .then(console.log)
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
                  onClickNoteViewerEditButtonHandler={this.onClickNoteViewerEditButtonHandler}
                  onClickNoteEditCancelButtonHandler={this.onClickNoteEditCancelButtonHandler}
                  onClickNoteEditSaveButtonHandler={this.onClickNoteEditSaveButtonHandler}
                  isEdit = {isEdit}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
