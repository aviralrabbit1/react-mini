import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Flags from './mini/Flag.';
import States from './mini/States';
import Error from './mini/Error';

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
                  <Route path="/flags" index element={<Flags />} />
                  <Route path="/" element={<States/>} />
                  <Route path="/*" element={<Error />} />
              </Routes>
        </div>
    </Router>
  )
}

export default App
