import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>Se connecter</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}

export default App;
