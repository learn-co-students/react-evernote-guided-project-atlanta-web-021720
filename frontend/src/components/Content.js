import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';
import Util from './Uitl'

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {


  renderContent = () => {
    let {isEdit,
      selectedNote,
      onClickNoteViewerEditButtonHandler,
      onClickNoteEditCancelButtonHandler,
      onClickNoteEditSaveButtonHandler,
      onClickNoteViewerEditDeleteHandler
    } = this.props;
    if (isEdit&&!Util.isObjectEmpty(selectedNote)) {
      return <NoteEditor selectedNote =  {selectedNote} 
                        onClickNoteEditCancelButtonHandler={onClickNoteEditCancelButtonHandler}
                        onClickNoteEditSaveButtonHandler={onClickNoteEditSaveButtonHandler}
              />;
    } else if (!isEdit&&!Util.isObjectEmpty(selectedNote)) {
      return <NoteViewer selectedNote =  {selectedNote}
                        onClickNoteViewerEditButtonHandler={onClickNoteViewerEditButtonHandler}
                        onClickNoteViewerEditDeleteHandler={onClickNoteViewerEditDeleteHandler}
                        
              />;
    } else {
      return <Instructions />;
    }
  }

  isEmpty=(obj) =>{
    return Object.keys(obj).length === 0;
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
