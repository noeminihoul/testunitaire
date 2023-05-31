import logo from './logo.svg';
import './App.css';

function App({ users }) {
  return (
    <div>
      <ul>
        {users.map((item, index) => {
          return item.ceinture=="noire" && <li data-testid="element_utilisateur"
            key={index}>
            {item.name}
          </li>
        })}
      </ul>
    </div>
  );
}

export default App;
