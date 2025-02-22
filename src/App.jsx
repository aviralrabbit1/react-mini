import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Flags from './mini/Flag.';
import States from './mini/States';
import Error from './mini/Error';
import Fullname from './mini/Fullname';
import Calculator from './mini/Calculator';

function App() {

  return (
    <Router>
        <div className="app">
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">Flags</Link>
                    </li>
                    <li>
                        <Link to="/states">States</Link>
                    </li>
                    <li>
                        <Link to="/fullname">Fullname</Link>
                    </li>
                    <li>
                        <Link to="/calculator">Calculator</Link>
                    </li>
                </ul>
            </nav>
              <Routes>
                  <Route path="/" index element={<Flags/>} />
                  <Route path="/states" element={<States />} />
                  <Route path="/fullname" element={<Fullname />} />
                  <Route path="/calculator" element={<Calculator />} />
                  <Route path="/*" element={<Error />} />
              </Routes>
        </div>
    </Router>
  )
}

export default App
