import React, { useState } from 'react';
import './App.css';

function App({ users, handleClick }) {
  const [loading, setLoading] = useState(false);

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
