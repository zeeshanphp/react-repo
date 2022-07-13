import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dynam from './Components/Dynam';
import Menu from './Components/Navbar';
import Finf from './Components/Finf';
import './css/bootstrap.min.css'
import Ustate from './Components/Ustate';
import Pstate from './Pstate';
import Listouput from './Components/Listoutput';
import StateHook from './Components/StateHook';
import StateHookOnChange from './Components/StateHookOnChange';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Menu />
    <StateHook />
    <StateHookOnChange />
    {/* <Finf />
    <App />
    <Dynam />
    <Ustate />
    <Pstate />
    <Listouput /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
