import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation';
import Footer from './components/footer';
import Home from './pages/home';

import './App.css'
import LoginPage from './Pages/LoginPage';
import SignUp from './Pages/Signup';
import Logout from "./Pages/Logout" 
import Profile from "./Pages/Profile"
import Update from './Pages/Update';

function App() {

  return (
    <>
       <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/update" element={<Update />} />
        
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
