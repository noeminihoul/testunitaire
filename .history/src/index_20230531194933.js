import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App
      users={[
        { name: "Noémi", role: "administrateur",ceinture:"noire" },
        { name: "Bao", role: "utilisateur",ceinture:"noire" },
        { name: "Nordin", role: "Super admin",ceinture:"jaune" },
        { name: "Dominique", role: "invité",ceinture:"blanche" },
        { name: "Florian", role: "invité",ceinture:"rouge" },
      ]}
      handleClick={() => {console.log("handleClick")}}
      >
    </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
