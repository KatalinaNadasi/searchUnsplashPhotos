import React, { useRef } from 'react';
import './App.css';

function SearchBar({onSearchSubmit}) {

  const inputSearch = useRef()

  const onSubmit = (event) => {
    event.preventDefault()
    onSearchSubmit(inputSearch.current.value)
  }

  const formStyle = {
    textAlign: 'center',
    margin: '2rem',
  }

  const WrapperStyle = {
    margin: '1rem',
  }

  const inputStyle = {
    padding: '0.7rem 0.3rem',
    margin: '1rem 0',
    borderRadius: '3px',
    border: '1px solid lightgray',
  }

  const buttonStyle = {
    padding: '0.7rem 1.5rem',
    margin: '1rem 0.5rem',
    borderRadius: '3px',
    backgroundColor: 'crimson',
    color: 'white',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    border: '1px solid white',
  }

  return (
    <>
      <form onSubmit={onSubmit} style={formStyle}>
        <h1>Search 10 first images from Unsplash</h1>
        <h2>(and build an inspiring mosaic)</h2>
        <div style={WrapperStyle}>
          <input
            placeholder="Enter a key word"
            ref={inputSearch}
            style={inputStyle}
            />
          <button style={buttonStyle}>Submit</button>
        </div>
      </form>
    </>
  );
}

export default SearchBar;
