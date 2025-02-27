import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Flags from './mini/Flag.';
import States from './mini/States';
import Error from './mini/Error';
import Fullname from './mini/Fullname';
import Calculator from './mini/Calculator';
import Counter from './mini/Counter';
import ClassCounter from './mini/ClassCounter';
import Pagination from './mini/Pagination';
import Login from './mini/Login';

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
                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>
                    <li>
                        <Link to="/classCounter">ClassCounter</Link>
                    </li>
                    <li>
                        <Link to="/pagination">Pagination</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
              <Routes>
                  <Route path="/" index element={<Flags/>} />
                  <Route path="/states" element={<States />} />
                  <Route path="/fullname" element={<Fullname />} />
                  <Route path="/calculator" element={<Calculator />} />
                  <Route path="/counter" element={<Counter />} />
                  <Route path="/classCounter" element={<ClassCounter />} />
                  <Route path="/pagination" element={<Pagination />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/*" element={<Error />} />
              </Routes>
        </div>
    </Router>
  )
}

export default App
