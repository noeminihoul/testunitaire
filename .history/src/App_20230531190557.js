import logo from './logo.svg';
import './App.css';

function App({user}) {
  return (
    <div>
      <h1>Panneau d'administration</h1>
      <h2>Bonjour {user.name} - Vous êtes bien connecté en tant que: {user.role}</h2>
    </div>
  );
}

export default App;
