import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Flags from './mini/Flag.';
import States from './mini/States';

function App() {

  return (
    <Router>
        <div className="app">
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">States</Link>
                    </li>
                    <li>
                        <Link to="/flags">Flags</Link>
                    </li>
                </ul>
            </nav>
              <Routes>
                  <Route path="/" element={<States/>} />
                  <Route path="/flags" element={<Flags />} />
              </Routes>
        </div>
    </Router>
  )
}

export default App
