import './App.css';
import {auth} from './firebase'
import {onAuthStateChanged} from 'firebase/auth'
import React, {useState, useEffect} from 'react'
import {AuthProvider} from './components/AuthContext'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
     })
  }, [])

  return (
    <Router>
      <AuthProvider value={{currentUser}}>
        
      </AuthProvider>
    </Router>
  );
}

export default App;
