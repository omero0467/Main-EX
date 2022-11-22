import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import MoodContext from './context/MoodContext';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  return (
    <MoodContext>
      <Router>
      <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </MoodContext>
  )
}

export default App