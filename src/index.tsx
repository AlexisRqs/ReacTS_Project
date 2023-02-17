import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FirstComponent from "./components/FirstComponent";
import UserComponent from "./components/UserComponent";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <h1>ReacTS Project</h1>
      <App />
      <FirstComponent />
      <UserComponent name="Hohn Doe" age={26} address="420 Rue du Spliff" dob={new Date()} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
