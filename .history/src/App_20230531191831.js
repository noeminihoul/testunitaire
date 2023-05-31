import logo from './logo.svg';
import './App.css';

function App({users}) {
  return (
    <div>
      <ul>
        {users.map(item => {
          return <li>{item.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
