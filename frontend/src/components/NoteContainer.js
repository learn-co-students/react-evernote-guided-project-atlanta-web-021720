import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';
import Adapter from './Adapter'
import Util from './Uitl'
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
    Adapter.getData(url)
    .then(data=>this.setState({notes: data}))
  }

  getFilteredNoted()
  {
    let filteredNotes = [...this.state.notes]
    if(this.state.searchFilter!=='')
    {
      filteredNotes = filteredNotes.filter((note)=>note.title.toLowerCase().includes(this.state.searchFilter.toLowerCase()))
    }
    return filteredNotes
  }

  onChangeSearchHandler = (event) =>
  {
    event.preventDefault();
    this.setState({searchFilter: event.target.value, isEdit:false, selectedNote:{}})

  }

  onClickNoteItemHandler = (note) =>
  {
    // console.log(note)
    this.setState({selectedNote: note, isEdit: false})
  }

  onClickNewButtonHandler = () =>
  {
    let newNote = {title: 'default', body: 'palceholder'}

    Adapter.createData(url,newNote)
    .then(data=>{
      console.log(data)
      // (preState)=>([...preState.notes,data])
      
      this.setState( (preState)=>({notes: [...preState.notes,data]}))
      
      //this.setState({notes: [...this.state.notes,data]})
      
      // this.setState({notes: (preState)=>{
      //   console.log([...preState.notes,data])
      //   return [...preState.notes,data]
      // }})
      
    })


    // debugger
    console.log('onClickNewButtonHandler')
  }

  onClickNoteViewerEditButtonHandler = () =>
  {
    // console.log(this.state.isEdit)
    this.setState({isEdit: true})
  }

  onClickNoteEditCancelButtonHandler = () =>
  {
    console.log('onClickNoteEditCancelButtonHandler')
        // console.log(note)
    this.setState({isEdit: false})
  }

  onClickNoteEditSaveButtonHandler = (event,edit_note) =>
  {
    event.preventDefault();
    // console.log('onClickNoteEditSaveButtonHandler')
    Adapter.editData(url,edit_note.id,edit_note)
    .then(data=>{
      console.log(data)
      this.upateNote(data)
    })

    // this.upateNote(edit_note)
  }

  upateNote=(note)=>
  {
    this.setState( 
        preState=>({
        notes: Util.getUpdateArrayData(preState.notes, note,note.id), isEdit: false, selectedNote: {}
      })
    )
  }
  
  // getUpdateArrayData=(data_array, new_data)=>
  // {
  //   //debugger
  //   let foundNote = data_array.find(data=>data.id === new_data.id)
  //   let index = data_array.indexOf(foundNote);
  //   let newArray= [...data_array];
  //   newArray[index] = new_data;
    
  //   return newArray
  // }

  render() {
    const {selectedNote,isEdit} = this.state;
    return (
      <Fragment>
        <Search onChangeSearchHandler = {this.onChangeSearchHandler}/>
        <div className='container'>
          <Sidebar notes={this.getFilteredNoted()}
                  selectedNote =  {selectedNote}
                  onClickNoteItemHandler = {this.onClickNoteItemHandler}
                  onClickNewButtonHandler = {this.onClickNewButtonHandler}
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
