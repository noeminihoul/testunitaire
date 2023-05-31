import React, { useState, useEffect } from 'react';
import './App.css';

function App({ users, handleClick }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, [])

  return (
    <div>
      <a data-testId="linktotest" onClick={() => {
        console.log("click")
        handleClick()
      }}>Click me</a>
    </div>
  );
}

export default App;
