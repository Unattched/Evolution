import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDmApYO7oZSMJm86Zx9838NKkltPyXeU6Q",
    authDomain: "evolution-83065.firebaseapp.com",
    projectId: "evolution-83065",
    storageBucket: "evolution-83065.appspot.com",
    messagingSenderId: "291003470295",
    appId: "1:291003470295:web:2fc56c157d20aee451fb92",
    measurementId: "G-9NJEVL08MF"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
