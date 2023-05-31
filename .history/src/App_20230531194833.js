import logo from './logo.svg';
import './App.css';

function App({ users, handleClick }) {
  return (
    <div>
      <a onClick={() => {
        console.log("click")
        handleClick()
      }}>Click me</a>
    </div>
  );
}

export default App;
