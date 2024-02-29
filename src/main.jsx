import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { firebaseConfig } from './firebase/config.js';

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

export const db = getFirestore(app);
