import './App.css';
import React from 'react';
import {useState} from 'react'
import {AuthProvider} from './components/AuthContext'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <Router>
      <AuthProvider value={{currentUser}}>
        
      </AuthProvider>
    </Router>
  );
}

export default App;
