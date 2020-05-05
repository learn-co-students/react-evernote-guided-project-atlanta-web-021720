import React from 'react';

const Search = (props) => {
  const {onChangeSearchHandler,OnChangeFilterSelectHandler,OnChangeSortSelectHandler} = props
  return (
    <div className="filter">
      <select name = 'filterSelect' onChange = {OnChangeFilterSelectHandler} className="form-control">
        <option value="title">Title</option>
        <option value="body">Body</option>
      </select>
      <input
        id="search-bar"
        type="text"
        placeholder="Search Notes"
        onChange = {onChangeSearchHandler}
      />
      {/* <select defaultValue={} name = 'size' onChange = {props.handleOnChangeSort} className="form-control"> */}
      
      <label>{`Sort `}</label>
      <select name = 'sortSelect' onChange = {OnChangeSortSelectHandler} className="form-control">
        <option value="All">All</option>
        <option value="Alphabetical">Alphabetical</option>
      </select>

    </div>
  );
}

export default Search;
