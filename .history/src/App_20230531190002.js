import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>Panneau d'administration</h1>
      {/* generate form */}
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default App;
