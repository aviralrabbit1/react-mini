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
import Stopwatch from './mini/Stopwatch';
import Weather from './mini/Weather';
import SpellCheck from './mini/SpellCheck';
import Dictionary from './mini/Dictionary';
import Table from './mini/Table';
import Modal from './mini/Modal';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Box from '@mui/material/Box';

function App() {

  return (
    <Router>
        <div className="app">
        <Navbar />
        <Box sx={{ flexGrow: 1, padding: 3 }}>
            <Routes>
                  <Route path="/" index element={<Home/>} />
                  <Route path="/flags" index element={<Flags/>} />
                  <Route path="/states" element={<States />} />
                  {/* <Route path="/navbar" element={<Navbar />} /> */}
                  <Route path="/fullname" element={<Fullname />} />
                  <Route path="/calculator" element={<Calculator />} />
                  <Route path="/counter" element={<Counter />} />
                  <Route path="/classcounter" element={<ClassCounter />} />
                  <Route path="/pagination" element={<Pagination />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/stopwatch" element={<Stopwatch />} />
                  <Route path="/weather" element={<Weather />} />
                  <Route path="/spellcheck" element={<SpellCheck />} />
                  <Route path="/dictionary" element={<Dictionary />} />
                  <Route path="/table" element={<Table />} />
                  <Route path="/modal" element={<Modal />} />
                  <Route path="/*" element={<Error />} />
            </Routes>
        </Box>                
        </div>
    </Router>
  )
}

export default App
