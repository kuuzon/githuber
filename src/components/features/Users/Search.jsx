import React, { Fragment, useState } from 'react';

const Search = ({ searchUsers, clearUsers, showClear, setAlert }) => {
  // HOOK: Declare states
  const [text, setText] = useState("");

  // COMPONENT LOGIC:
  // (a) Function: Updates text state according to text passed into search input
  const handleChange = (e) => {
    setText(e.target.value);
  }

  // (b) Function: Submits search form to call API function of searchUsers() 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert(
        "Please enter a GitHub User into Search bar",
        "light"
      )
    } else {
      console.log(text);
      searchUsers(text);
    }
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="form">
        {/* 1. SEARCH INPUT */}
        <input 
          type="text" 
          name="text" 
          placeholder="Search Users..." 
          value={text} 
          onChange={handleChange}
        />
        {/* 2. SUBMIT BUTTON */}
        <input 
          type="submit" 
          value="Search" 
          className="btn btn-dark btn-block"
        /> 
      </form>
      {/* 3. CLEAR BUTTON */}
      { showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
      )} 
    </Fragment>
  )
}

export default Search