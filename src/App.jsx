import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import './App.css';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App;
