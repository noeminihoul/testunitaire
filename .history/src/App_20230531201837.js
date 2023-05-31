import React, { useState, useEffect } from 'react';
import './App.css';

function App({ users, handleClick }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, [])

  return (
    <div>
      {loading && 
      <>
      <div data-testid="loading">Loading...</div>
      <button data-testid="buttonLoading" onClick={() => {setLoading(false)}}>Stop loading</button>
      <button data-testId="buttonDisabled" disabled>Disabled</button>
      <input type="text" data-testid="testInput" />
      
      </>

      }
      {!loading &&
        <a data-testId="linktotest" onClick={() => {
          console.log("click")
          handleClick()
        }}>Click me</a>
      }
    </div>
  );
}

export default App;
