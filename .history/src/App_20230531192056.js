import logo from './logo.svg';
import './App.css';

function App({users}) {
  return (
    <div>
      <ul>
        {users.map((item,index) => {
          return <li key={index}>{item.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
